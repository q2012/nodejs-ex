//  OpenShift sample Node application
const bodyParser = require("body-parser");
var express = require('express'),

    app     = express();

var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080,
    ip   = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || 'localhost',

    doopen = 0,
    init = 0,
    state = 0,
    battery = 0,
    set = 0;

var pin, mode = "family";

app.use(bodyParser.json());

app.get('/', function (req, res) {
  var resp = "\b";

  if(req.query.doopen)
    doopen = req.query.doopen;
  if(req.query.init)
    init = req.query.init;
  if(req.query.state)
    state = req.query.state;
  if(req.query.battery)
    battery = req.query.battery;

  if(req.query.get)
  {
    resp += set + doopen + init;
    set = 0;
  }
  else if(req.query.set)
    set = 1;
  else
    resp += "State: " + state + " Battery: " + battery + " Init: " + init + " Doopen: " + doopen + " Set: " + set;

  res.setHeader('Access-Control-Allow-Origin','*');
  res.setHeader('Access-Control-Allow-Methods','GET,POST,OPTIONS,PUT,PATCH,DELETE');

  res.setHeader('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept');
  res.send(resp);

  console.log(resp);
});

app.get('/alexa', function (req, res) {
  var resp = "\b";

  if(req.query.doopen)
    doopen = req.query.doopen;
  if(req.query.init)
    init = req.query.init;
  if(req.query.state)
    state = req.query.state;
  if(req.query.battery)
    battery = req.query.battery;

  if(req.query.get)
  {
    resp += set + doopen + init;
    set = 0;
  }
  else if(req.query.set)
    set = 1;
  else
    resp += "State: " + state + " Battery: " + battery + " Init: " + init + " Doopen: " + doopen + " Set: " + set;

  res.setHeader('Access-Control-Allow-Origin','*');
  res.setHeader('Access-Control-Allow-Methods','GET,POST,OPTIONS,PUT,PATCH,DELETE');

  res.setHeader('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept');
  res.send(resp);

  console.log(resp);
});

app.post('/alexa',function(req,res){
  var user_name=req.body.user;
  var password=req.body.password;
  console.log("User name = "+user_name+", password is "+password);
  res.end("yes");
});


// error handling
app.use(function(err, req, res, next){
  console.error(err.stack);
  res.status(500).send('Something bad happened!');
});

app.listen(port, ip);
console.log('Server running on http://%s:%s', ip, port);

module.exports = app ;
