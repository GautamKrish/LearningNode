const path = require('path')
const express = require('express')
const app = express()


//express.static() to serve up static html, css, images, etc.. files
//app.use() -> for middleware
app.use(express.static(path.join(__dirname, '../public')))

app.set('view engine', 'hbs')

app.get('', (req, res) => {
    res.render('index', {
        title : 'Weather',
        name : 'Gautam Krishnan'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title : 'About Me',
        name : 'Gautam Krishnan'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title : 'Help Page!',
        descr : 'Welcome to the help page!!'
    })
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