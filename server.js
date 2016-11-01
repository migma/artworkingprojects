// Server
var express     = require('express');
var app         = express();

// Data parser & Template engine
var bodyParser  = require('body-parser');
var exphbs      = require('express-handlebars');
var path        = require('path');

// Needed for Socket.io
var server      = require('http').createServer(app);


// Set template engine in Express
app.engine('.hbs', exphbs({
    defaultLayout: 'main.hbs',
    layoutsDir: path.join(__dirname, 'views/layouts/'),
    extname: '.hbs',
    // Helper function to parse variables when saving them to javascript in the view (otherwise you'll get the .toString() version)
    helpers: {
        json: function (context) { return JSON.stringify(context); }
    }
}));
app.set('views', path.join(__dirname, 'views/'));
app.set('view engine', '.hbs');

// Create virtual URI to public folder
app.use('/public', express.static(__dirname + '/public'));

// Set body parser for json data sent in POST
app.use(bodyParser.json());


// GET Method :: Homepage
app.get('/', function(req, res){

    // Render view
    res.render('index', {});
});
