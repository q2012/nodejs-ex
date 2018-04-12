//  OpenShift sample Node application
var express = require('express'),
    app     = express();

var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080,
    ip   = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';

var opened = 0,
    init = 0,
    state = 0,
    battery = 0,
    set = 0;

app.get('/', function (req, res) {
  var resp = "\b";

  if(undefined != req.query.opened)
    opened = req.query.opened;
  if(undefined != req.query.init)
    init = req.query.init;
  if(undefined != req.query.state)
    state = req.query.state;
  if(undefined != req.query.battery)
    battery = req.query.battery;

  if(req.query.get)
  {
    if(state != 0)
    {
      resp += "\b";
      state = 0;
    }
    resp += opened + init;
  }
  else if(req.query.set)
    state = 1;
  else
    resp += "Opened: " + state + " Battery: " + battery;

  resp.setHeader('Access-Control-Allow-Origin','*');
  resp.setHeader('Access-Control-Allow-Methods','GET,POST,OPTIONS,PUT,PATCH,DELETE');

  resp.setHeader('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept');
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
