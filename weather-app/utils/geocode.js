const request = require('postman-request')
require('dotenv').config()

const map_access_token = process.env.MAP_ACCESS_TOKEN
const user_name = process.env.USERNAME
const password = process.env.PASSWORD
const host = process.env.HOSTNAME

const geocode = (location, callback) => {
    locationComponent = encodeURIComponent(location)
    let options = {
        url : `https://api.mapbox.com/geocoding/v5/mapbox.places/${locationComponent}.json?access_token=${map_access_token}&limit=1`,
        proxy : `http://${user_name}:${password}@${host}:8080`,
        json : true
    }
    request(options, (error, response) => {
        if(error){
            callback('Unable to connect to location services!', undefined)
        } else if(response.body.features.length === 0){
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, {
                longitude : response.body.features[0].center[0],
                latitude : response.body.features[0].center[1],
                location : response.body.features[0].place_name
            })
        }
    })

}

module.exports = geocode