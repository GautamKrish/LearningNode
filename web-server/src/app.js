const express = require('express')
const app = express()

app.get('', (req, res) => {
    res.send('Hello Express!!')
})


app.get('/help', (req, res) => {
    res.send('Welcome to help page!')
})


app.listen(3000, () => {
    console.log('Server is up and running')
})