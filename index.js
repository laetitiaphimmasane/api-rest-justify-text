// Instanciation de l'objet qui va contenir notre serveur
var express = require('express');
var app = express();

//Gestion du token
var jwt = require('jsonwebtoken');
var privateKey = "foJIJDSO\nIofjeoieG14FHHFy\n";


//Gérer de la lecture des body
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true})); 
app.use(bodyParser.json());

//Route GET
app.get('/api', (req,res) => {
    res.send("L'API REST bonjour.")
});

app.post('/api/justify', (req,res) => {
    try {
    //request
    req.token
    //vérifier que le token 
    console.log('Voici le body',req.body);
    
    //response
        //appel de la fonction

    } catch (error) {
        res.send('404 error');
    }
    res.sendStatus(200);
    res.SetHeader('Content-Type','text/plain');
});

//Route POST /api/token
app.post('/api/token', (req,res) => {
    //request
    //try {
        var login =req.body.login;
        var motdepasse = req.body.motdepasse;
        //console.log(login);
        //console.log(motdepasse);
        if ((login = 'user') && (motdepasse = 'user')) {
            const token = jwt.sign({ user: req.body.login}, privateKey, { algorithm : 'RS256', expiresIn :'24h'});
            //console.log(token);
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
    //} catch {
    //    res.status(400).send('Please check your variables and try again.')
    //}

});

//fonction pour justify
function justify(){

};


//fonction pour vérifier le token 
function verify(){
    try { 
        var verified = jwt.verify(token, privateKey, function(err, verified){
            console.log('token vérifié')
        });
    
        jwt.verify(token, 'wrong-secret', function(err, decoded) {
            res.status(401).send('Utilisateur non authentifié')
        });
    } catch {
        res.status(401).send('')
    }
};

//Mettre le serveur sur écoute
app.listen(8080, () => {
    console.log('Le serveur est sur écoute.')
});