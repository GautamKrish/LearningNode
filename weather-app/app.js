const request = require('postman-request')
require('dotenv').config()

const weather_stack_api_key = process.env.WEATHER_STACK_API_KEY
const map_access_token = process.env.MAP_ACCESS_TOKEN
const user_name = process.env.USERNAME
const password = process.env.PASSWORD
const host = process.env.HOSTNAME


const weatherOptions = {
    url : `http://api.weatherstack.com/current?access_key=${weather_stack_api_key}&query=37.8267,-122.4233&units=s`,
    proxy : `http://${user_name}:${password}@${host}:8080`,
    json : true
}

request(weatherOptions, (_error, response) => {
    if(_error){
        console.log('Unable to connect to weather service!')
    } else if(response.body.error){
        console.log(response.body.error.info)
    } else {
        const current = response.body.current
        console.log(`${current.weather_descriptions[0]}. It is currently ${current.temperature} degrees. It feels like ${current.feelslike} though.`)
    }
})


const mapOptions = {
    url : `https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=${map_access_token}&limit=1`,
    proxy : `http://${user_name}:${password}@${host}:8080`,
    json : true
}

request(mapOptions, (_error, response) => {
    const features = response.body.features[0]
    console.log(`Longitude: ${features.center[0]}\nLatitude : ${features.center[1]}`)
})