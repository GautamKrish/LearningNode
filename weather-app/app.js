const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const input = process.argv[2]
if (input) {

    geocode(input, (error, geocodeData) => {
        if (error) {
            console.log('geocode error in app.js')
            return console.log(error)
        }
        debugger
        console.log(geocodeData)
        forecast(geocodeData.longitude, geocodeData.latitude, (error, forecastData) => {
            if (error) {
                return console.log(error)
            }
            console.log(geocodeData.location)
            console.log(forecastData)
        })
    })
} else {
    console.log('Please provide an address!')
}


