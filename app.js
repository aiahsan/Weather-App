const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv/config');
const authJwt = require('./helpers/jwt');
const errorHandler = require('./helpers/error-handler');

app.use(cors());
app.options('*', cors());

//middleware
app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));
app.use(morgan('tiny'));
app.use(authJwt());
app.use('/public/uploads', express.static(__dirname + '/public/uploads'));
app.use(errorHandler);

//Routes
 
const usersRoutes = require('./routes/users');
const listingRoutes = require('./routes/listings');
const citiesRoutes = require('./routes/cities');
const bookingRoutes = require('./routes/booking');
const categoryRoutes = require('./routes/categories');
 

const api = process.env.API_URL;

 
app.use(`${api}/users`, usersRoutes);
app.use(`${api}/listing`, listingRoutes);
app.use(`${api}/city`, citiesRoutes);
app.use(`${api}/booking`, bookingRoutes);
app.use(`${api}/category`, categoryRoutes);
 
//Database
mongoose
  .connect(process.env.CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'allinonedb',
  })
  .then(() => {
    console.log('Database Connection is ready...');
  })
  .catch((err) => {
    console.log(err);
  });

//Server
app.listen(process.env.PORT || 5000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
