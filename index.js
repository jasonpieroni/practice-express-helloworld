const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.post('/', (req, res) => {
    const team = req.body.value
    res.send(`You chose ${team}. Best of luck.`)
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})