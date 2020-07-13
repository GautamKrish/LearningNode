console.log('Inside client side javascript file')
const fetchForecast = (location) => {
    fetch(`http://localhost:3000/weather?address=${location}`).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                return console.log(data.error)
            }
            console.log(data)
        })
    })
}

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
console.log(weatherForm)
weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const location = search.value
    fetchForecast(location)
})
