console.log('Inside client side javascript file')

fetch('http://api.weatherstack.com/current?access_key=9fbea518ac28ae59ce55a830d5ec8d6c&query=42.3605,-71.05965&units=f').then((response) => {
    response.json().then((data) => {
        if(data.error){
            return console.log(data.error)
        }
        console.log(data.location)
        console.log(data.current.weather_descriptions[0])
    })
})