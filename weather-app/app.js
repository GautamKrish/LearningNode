const request = require('postman-request')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
require('dotenv').config()


const user_name = process.env.USERNAME
const password = process.env.PASSWORD
const host = process.env.HOSTNAME


// const weatherOptions = {
//     url : `http://api.weatherstack.com/current?access_key=${weather_stack_api_key}&query=37.8267,-122.4233&units=s`,
//     proxy : `http://${user_name}:${password}@${host}:8080`,
//     json : true
// }

// request(weatherOptions, (_error, response) => {
//     if(_error){
//         console.log('Unable to connect to weather service!')
//     } else if(response.body.error){
//         console.log(response.body.error.info)
//     } else {
//         const current = response.body.current
//         console.log(`${current.weather_descriptions[0]}. It is currently ${current.temperature} degrees. It feels like ${current.feelslike} though.`)
//     }
// })


geocode('Boston', (error, data) => {
    console.log('Error : ', error)
    console.log('Data : ', data)
})

forecast(-75.7088, 44.1545, (error, data) => {
    console.log('Error : ' , error)
    console.log('Data : ', data)
})