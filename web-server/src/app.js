const path = require('path')
const express = require('express')
const app = express()

//express.static() to serve up static html, css, images, etc.. files
//app.use() -> for middleware
app.use(express.static(path.join(__dirname, '../public')))


app.get('/weather', (req, res) => {
    res.send({
        forecast : 'It is 25 degrees here in Sreekrishnapuram',
        location : 'Sreekrishnapuram, Palakkad, Kerala, India'
    })
})

app.listen(3000, () => {
    console.log('Server is up and running')
})