const express = require('express');
const knex = require('./db');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());

// app.use(function (req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });

app.options('*', cors());

app.get('/list', cors(), (req, res) => {
    knex("pessoa").select().then((ret) => {
        console.log(ret);
        res.send(ret).status(204);
    })
});

app.post('/save', cors(), (req, res) => {
    let pessoa = req.body;
    knex("pessoa").insert(pessoa, 'id_pessoa')
        .then((ret) => {
            pessoa.id_pessoa = ret[0];
            res.send(pessoa).status(204);
        }).catch((err) => {
            console.log(err);
            res.send().status(500);
        });
});

knex.migrate.latest();

module.exports = app;