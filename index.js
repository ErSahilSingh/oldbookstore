const express = require('express');
var mysql      = require('mysql');
const myconnection = require('express-myconnection');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
 
 app.use(myconnection(mysql,{
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'oldbookstore'
}, 'single' ))

app.use(express.static(path.join(__dirname, 'views')))
// connection.connect(function(err) {
//     if (err) {
//       console.error('error connecting: ' + err.stack);
//       return;
//     }
   
//     console.log('connected as id ' + connection.threadId);
//   });
 
  app.use('/user', require('./routes/user'));
  app.use('/seller', require('./routes/seller'));
  app.use('/contact', require('./routes/contact'));
  app.use('/buy', require('./routes/buy'));
  app.use('/complaint', require('./routes/complaint'));
  app.use('/Tips', require('./routes/Tips'));
  
app.listen(3000,function (req, res) {
    console.log('Listening to port 3000')
  })