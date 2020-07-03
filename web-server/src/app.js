const express = require('express')
const app = express()

app.get('', (req, res) => {
    res.send('<h1>Hello Express!!</h1>')
})


app.get('/help', (req, res) => {
    res.send([{
        name : 'Gautam',
        age : 23
    }, {
        name : 'Katta',
        age : 23
    }])
})

app.get('/about', (req, res) => {
    res.send('<h1>Welcome to about page!</h1>')
})

app.get('/weather', (req, res) => {
    res.send({
        forecast : 'It is 25 degrees here in Sreekrishnapuram',
        location : 'Sreekrishnapuram, Palakkad, Kerala, India'
    })
})

app.listen(3000, () => {
    console.log('Server is up and running')
})