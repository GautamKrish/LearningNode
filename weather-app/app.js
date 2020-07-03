const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const input = process.argv[2]
if (input) {

    geocode(input, (error, {longitude, latitude, place_name} = {}) => {
        if (error) {
            console.log('geocode error in app.js')
            return console.log(error)
        }
        forecast(longitude, latitude, (error, {summary, temperature, feelsLike} = {}) => {
            if (error) {
                return console.log(error)
            }
            console.log('Location : ', place_name)
            console.log('Summary : ', summary)
            console.log('Current Temperature : ', temperature)
            console.log('Feels Like : ', feelsLike)
        })
    })
} else {
    console.log('Please provide an address!')
}


