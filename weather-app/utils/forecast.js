const request = require('postman-request')
require('dotenv').config()

const weather_stack_api_key = process.env.WEATHER_STACK_API_KEY
const user_name = process.env.USERNAME
const password = process.env.PASSWORD
const host = process.env.HOSTNAME



const forecast = (longitude, latitude, callback) =>{
    let options = {
        url : `http://api.weatherstack.com/current?access_key=${weather_stack_api_key}&query=${latitude},${longitude}&units=s`,
        proxy : `http://${user_name}:${password}@${host}:8080`,
        json : true
    }

    request(options, (_error, response) => {
        if(_error){
            callback('Unable to connect to weather service!', 'undefined')
        } else if(response.body.error){
            callback(response.body.error.info, 'undefined')
        } else {
            let current = response.body.current
            callback('undefined',{
                summary : current.weather_descriptions[0],
                currentTemperature :current.temperature,
                feelsLike : current.feelslike
            })
        }
    })

}

module.exports = forecast