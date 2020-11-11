//jshint esversion:6


const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const request = require("request");

const address = process.argv[2];
const url =`http://api.openweathermap.org/data/2.5/weather?q=${address}&units=metric&appid=ca2bf9fe4abd59876c2c9c28527c1843`;


app.use(bodyParser.urlencoded({
    extended: true
}));

app.get("/", function(req, res) {

    res.sendFile(__dirname + "/index.html");

});

if (!address){
    return console.log("Please enter the name of a city");
}
request(url, function(error, response, body){

const data = JSON.parse(body);




});

app.post("/", function(req, res){

const weatherResult = req.data.main.temp;

let result = console.log(`it's currentlt ${weatherResult} outside`);

res.send(result);

});

app.listen(3000, function() {
    console.log("app is working at port 3000");

});
