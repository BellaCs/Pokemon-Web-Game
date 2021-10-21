var express = require("express"),
    app = express(),
    port = process.env.PORT || 3000,
    bodyparser = require('body-parser');


app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

var routes = require('./routes/pokemonGameRoutes');
routes(app);

app.listen(port);

console.log('RESTful API server working on port: ' + port);