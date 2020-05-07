// dependencies
const express = require('./node_modules/express');
const app = express();
const mongoose = require('mongoose');
const methodOverride = require('./node_modules/method-override');

//___________________
//Port
//___________________
// Allow use of Heroku's port or your own local port, depending on the environment
const PORT = process.env.PORT || 3000;

//___________________
//Database
//___________________
// How to connect to the database either via heroku or locally
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/demo-2'
// Connect to Mongo
mongoose.connect(MONGODB_URI ,  { useNewUrlParser: true});
// Error / success
mongoose.connection.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
mongoose.connection.on('connected', () => console.log('mongo connected: ', MONGODB_URI));
mongoose.connection.on('disconnected', () => console.log('mongo disconnected'));
// open the connection to mongo
mongoose.connection.on('open' , ()=>{});



// middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'jsx');
app.engine('jsx', require('./node_modules/express-react-views').createEngine());
app.use(methodOverride('_method'));
app.use(express.static(__dirname + '/public'));

// mongoose connection
mongoose.connect('mongodb://localhost:27017/basiccrud', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', () => {
    console.log("connected to mongo");
})


//controllers
const RecipeController= require('./controllers/Recipe.js')
app.use('/FBlog',RecipeController);

// listen
app.listen(PORT, () => {
    console.log('listening on: ' + PORT);
});