const request = require('postman-request')
require('dotenv').config()

const api_key = process.env.API_KEY
const user_name = process.env.USERNAME
const password = process.env.PASSWORD
const host = process.env.HOSTNAME


const url = `http://api.weatherstack.com/current?access_key=${api_key}&query=37.8267,-122.4233`

const options = {
    proxy : `http://${user_name}:${password}@${host}:8080`
}

request(url, options, (_error, response) => {
    const data = JSON.parse(response.body)
    console.log(data.current)
})
