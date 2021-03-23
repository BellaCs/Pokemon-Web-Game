const bodyParser = require("body-parser");

var express = require("express"),
    app = express(),
    port = process.env.PORT || 3000,
    bodyparser = require('body-parser');


app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());

var routes = require('./routes/pokemonGameRoutes');
routes(app);

app.listen(port);

console.log('RESTful API server working on port: ' + port);