const porta = 3003
import express from require('express')
const app = express()
import bodyParser from require('body-parser')

app.use(bodyParser.urlencoded({ extended: true}))

app.post('/usuarios', (req, resp) => {
    console.log(req.body)
    console.log(req.query)
    resp.send('<h1>Parabéns</h1>')
})

app.listen(3003)
