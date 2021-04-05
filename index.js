// Instanciation de l'objet qui va contenir notre serveur
var express = require('express');
var app = express();

var jwt = require('jsonwebtoken');
const privateKey = 'foJOGIROIJDSOIofjeoieGRIOZOEHHF';


//Route GET
app.get('/api', (req,res) => {
    res.send("L'API REST bonjour.")
});

//Route POST /api/justify
app.post('/api/justify', (req,res) => {
    try {
    //request
    req.token
    console.log('Voici le body',req.body);

    //response
        //appel de la fonction

    } catch (error) {
        res.send('404 error');
    }
    res.sendStatus(200);
    res.header('text/plain');
});

//Route POST /api/token
app.post('/api/token', (req,res) => {
    //request
    console.log(req.user);
    console.log(req.password == "user");
    if (req.user == "user" && req.password == "user") {
        var token = jwt.sign({ user: req.user}, privateKey, { algorithm : 'RS256', expiresIn : 10000});
        console.log(token);
        //response
        res.send.token;
        if (error) {
            res.send('404 Error');
        } else {
            res.send(200);
        };
    } else {
        res.send('Les identifiants sont incorrects.');
    };
});

//fonction pour justify
function justify(){

};


//fonction pour le token 
function jwt() {
    const { secret } = config;
    return expressJwt({ secret, algorithms: ['HS256'] }).unless({
        path: [
            '/api/token'
        ]
    });
}

app.listen(8080, () => {
    console.log('Le serveur est sur écoute.')
});