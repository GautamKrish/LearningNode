const request = require('postman-request')
require('dotenv').config()

const api_key = process.env.API_KEY
const user_name = process.env.USERNAME
const password = process.env.PASSWORD
const host = process.env.HOSTNAME


const options = {
    url : `http://api.weatherstack.com/current?access_key=${api_key}&query=37.8267,-122.4233&units=s`,
    proxy : `http://${user_name}:${password}@${host}:8080`,
    json : true
}

request(options, (_error, response) => {
    const current = response.body.current
    console.log(`${current.weather_descriptions[0]}. It is currently ${current.temperature} degrees. It feels like ${current.feelslike} though.`)
})
