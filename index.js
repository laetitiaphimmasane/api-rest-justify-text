// Instanciation de l'objet qui va contenir notre serveur
var express = require('express')
var app = express()

//Connexion à la base de données

//Middleware
app.use(express.json())

//Route GET
app.get('/api', (req,res) => {
    res.send("L'API REST bonjour.")
})

//Route POST /api/justify
app.post('api/justify', (req,res) => {
    Headers:{"Content-Type"='text/plain'}
})

//Route POST /api/token
//app.post('api/token', (req,res) => {

//})

// 
app.listen(8080, () => {
    console.log('Le serveur est sur écoute.')
})