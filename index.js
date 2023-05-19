const express = require('express')

const app = express()

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.post('/', (req, res) => {
    const team = req.body.teams
    res.send(`You chose the ${team}. Best of luck.`)
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})