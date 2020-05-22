const fs = require("fs")
const bodyParser = require("body-parser")
const db = require('./queries')

const express = require('express')
const app = express()




app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/',(req,res) => {
   res.send("Hello World")
});

app.get('/movies', db.getMovies)

app.get('/movies/:id', db.getMoviesByID)

//app.get('/movies?search=:title', db.getMoviesByTitle)
//app.get('/titles?search=:title', db.getMoviesByTitle)

module.exports = app