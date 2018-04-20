//  OpenShift sample Node application
var express = require('express'),
    app     = express();

var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080,
    ip   = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0',

    doopen = 0,
    init = 0,
    state = 0,
    battery = 0,
    set = 0;

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

// error handling
app.use(function(err, req, res, next){
  console.error(err.stack);
  res.status(500).send('Something bad happened!');
});

app.listen(port, ip);
console.log('Server running on http://%s:%s', ip, port);

module.exports = app ;
