//  OpenShift sample Node application

var express = require('express'),
    app     = express();
    const bodyParser = require("body-parser");

var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080,
    ip   = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || 'localhost';

let first = true;

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

var MODE = Object.freeze({fitness:"fitness", family:"family", biohack:"biohack"});

function Pair(key, val) {
  this.key = key;
  this.val = val;
}

function Lock(lockID, lockName) {
  this.lockID = lockID;
  this.lockName = lockName;
  this.state = 'close';
  this.setOpen;
  this.time = new Date();
  this.setTime = new Date();
  this.shift = 0;
  this.mode = MODE.fitness;
  this.PIN;
  this.setOpenTime = new Date();
  this.setCloseTime = new Date();  
  this.battery = '100';  
  this.signal;
  
  this.qa = [];
  this.curQuestion = 0;
}

function Hub(hubID,hubName) {
  this.hubID = hubID;
  this.hubName = hubName;
  this.locks = [];
}

function User(userID, amazonUID) {
  this.userID = userID;
  this.amazonUID = amazonUID;
  this.hubs = [];
}

let users = [];
let hubs = [];
let locks = [];

app.get('/test-data', function(req,res) {
  users = [];
  locks = [];
  hubs = [];

  users.push(new User('1', '1'));
  users.push(new User('2', '2'));
  users.push(new User('3', '3'));
  users.push(new User('4', '4'));

  hubs.push(new Hub('1','First'));
  hubs.push(new Hub('2','Second'));
  hubs.push(new Hub('3','First'));
  hubs.push(new Hub('4','Second'));
  hubs.push(new Hub('5','First'));

  locks.push(new Lock('1','First'));
  locks.push(new Lock('2','Second'));
  locks.push(new Lock('3','First'));
  locks.push(new Lock('4','First'));
  locks.push(new Lock('5','Second'));
  locks.push(new Lock('6','Third'));
  locks.push(new Lock('7','First'));
  locks.push(new Lock('8','Second'));
  locks.push(new Lock('9','First'));

  users[0].hubs.push(hubs[0]);
  users[0].hubs.push(hubs[1]);
  users[1].hubs.push(hubs[2]);
  users[1].hubs.push(hubs[3]);
  users[2].hubs.push(hubs[4]);

  users[0].hubs[0].locks.push(locks[0]);
  users[0].hubs[0].locks.push(locks[1]);
  users[0].hubs[1].locks.push(locks[2]);
  users[1].hubs[0].locks.push(locks[3]);
  users[1].hubs[0].locks.push(locks[4]);
  users[1].hubs[0].locks.push(locks[5]);
  users[1].hubs[1].locks.push(locks[6]);
  users[1].hubs[1].locks.push(locks[7]);
  users[2].hubs[0].locks.push(locks[8]);

 // console.log(JSON.stringify(users));
 // first = false;

  res.sendStatus(201);
});



app.get('/hub', function(req, res) {
  if(req.query.id && hubs[req.query.id])
  {
    req.query.hubName?hubs[req.query.id].hubName = req.query.hubName:hubs[req.query.id].hubName;
    req.query.hubID?hubs[req.query.id].hubID = req.query.hubID:hubs[req.query.id].hubID;
    res.send(JSON.stringify(hubs[req.query.id]));


    res.send(JSON.stringify(hubs[req.query.id]));
    return;
  }
  res.sendStatus(404);
});

app.get('/lock', function(req, res) {
  if(req.query.id && locks[req.query.id])
  {
    req.query.lockID?locks[req.query.id].lockID = req.query.lockID:locks[req.query.id].lockID;
    req.query.lockName?locks[req.query.id].lockName = req.query.lockName:locks[req.query.id].lockName;
    req.query.state?locks[req.query.id].state = req.query.state:locks[req.query.id].state;
    req.query.setOpen?locks[req.query.id].setOpen = req.query.setOpen:locks[req.query.id].setOpen;
    req.query.mode?locks[req.query.id].mode = req.query.mode:locks[req.query.id].mode;
    req.query.PIN?locks[req.query.id].PIN = req.query.PIN:locks[req.query.id].PIN;
    req.query.shift?locks[req.query.id].shift = req.query.shift:locks[req.query.id].shift

    if(req.query.setOpenTime)
      locks[req.query.id].setOpenTime.setTime(req.query.setOpenTime);
    if(req.query.setCloseTime)
      locks[req.query.id].setCloseTime.setTime(req.query.setCloseTime);
    if(req.query.setTime)
      locks[req.query.id].setTime.setTime(req.query.setTime);
    if(req.query.time)
      locks[req.query.id].time.setTime(req.query.time);

    req.query.battery?locks[req.query.id].battery = req.query.battery:locks[req.query.id].battery;
    req.query.signal?locks[req.query.id].signal = req.query.signal:locks[req.query.id].signal;


    res.send(JSON.stringify(locks[req.query.id]));
    return;
  }
  res.sendStatus(404);
});

app.get('/user', function(req, res) {
  if(req.query.id && users[req.query.id])
  {
    req.query.userID?users[req.query.id].userID = req.query.userID:users[req.query.id].userID;
    req.query.amazonUID?users[req.query.id].amazonUID = req.query.amazonUID:users[req.query.id].amazonUID;
    res.send(JSON.stringify(users[req.query.id]));
    return;
  }
  res.sendStatus(404);
});






app.post('/hub', function(req,res) {
    if(req.body.id && hubs[req.body.id])
    {
      req.body.hubName?hubs[req.body.id].hubName = req.body.hubName:hubs[req.body.id].hubName;
      req.body.hubID?hubs[req.body.id].hubID = req.body.hubID:hubs[req.body.id].hubID;
      res.send(JSON.stringify(hubs[req.body.id]));
      return;
    }
    res.sendStatus(404);
});

app.post('/user', function(req,res) {
  console.log(req.body.id + " " + users[req.body.id]);
    if(req.body.id && users[req.body.id])
    {
      req.body.amazonUID?users[req.body.id].amazonUID = req.body.amazonUID:users[req.body.id].amazonUID;
      res.send(JSON.stringify(users[req.body.id]));
      return;
    }
    res.sendStatus(404);
});

app.post('/lock', function(req,res) {
  console.log(JSON.stringify(req.body));
    if(req.body.id)
    {
      req.body.lockID?locks[req.body.id].lockID = req.body.lockID:locks[req.body.id].lockID;
      req.body.lockName?locks[req.body.id].lockName = req.body.lockName:locks[req.body.id].lockName;
      req.body.state?locks[req.body.id].state = req.body.state:locks[req.body.id].state;
      req.body.setOpen?locks[req.body.id].setOpen = req.body.setOpen:locks[req.body.id].setOpen;
      req.body.mode?locks[req.body.id].mode = req.body.mode:locks[req.body.id].mode;
      req.body.PIN?locks[req.body.id].PIN = req.body.PIN:locks[req.body.id].PIN;
      req.body.shift?locks[req.body.id].shift = req.body.shift:locks[req.body.id].shift

      if(req.body.setOpenTime)
        locks[req.body.id].setOpenTime.setTime(req.body.setOpenTime);
      if(req.body.setCloseTime)
        locks[req.body.id].setCloseTime.setTime(req.body.setCloseTime);
      if(req.body.setTime)
        locks[req.body.id].setTime.setTime(req.body.setTime);
      if(req.body.time)
        locks[req.body.id].time.setTime(req.body.time);

      req.body.battery?locks[req.body.id].battery = req.body.battery:locks[req.body.id].battery;
      req.body.signal?locks[req.body.id].signal = req.body.signal:locks[req.body.id].signal;

      res.send(JSON.stringify(locks[req.body.id]));
      return;
    }
    res.sendStatus(404);
});


app.post('/alexa',function(req,res) {
  if(req.body.amazonUID)
  {
    let user = users.find(user => user.amazonUID == req.body.amazonUID);
    if(!user)
    {
      res.send(JSON.stringify({"succ": false, "message": "user not found"}));
      return;
    }

    let hub = user.hubs.find(hub => hub.hubName == req.body.hubName);
    if(!hub)
    {
      res.send(JSON.stringify({"succ": false, "message": "hub not found"}));
      return;
    }

    let lock = hub.locks.find(lock => lock.lockName == req.body.deviceName);
    if(!lock)
    {
      res.send(JSON.stringify({"succ": false, "message": "lock not found"}));
      return;
    }

    if(lock.mode == MODE.fitness)
    {
      if(lock.curQuestion < lock.qa.length)
      {
        if(req.body.answer && req.body.answer == lock.qa[lock.curQuestion].val)
        {
          ++lock.curQuestion;
          if(lock.curQuestion < lock.qa.length)
          {
            res.send({"succ":true,"question": lock.qa[lock.curQuestion].key});
            return;
          }
        }
        else if(!req.body.answer)
        {
          res.send({"succ": false, "message": "No answer", "question": lock.qa[lock.curQuestion].key});
          return;
        }
        else if(!(req.body.answer == lock.qa[lock.curQuestion].val))
        {
          res.send({"succ": false, "message": "Wrong answer", "question": lock.qa[lock.curQuestion].key});
          return;
        }
        else
        {
          res.send({"succ": false, "message": "Something wrong. Try again.", "question": lock.qa[lock.curQuestion].key});
          return;
        }
      }
      lock.curQuestion = 0;

      if(req.body.time)
      {
        lock.setTime.setTime(req.body.time);
        lock.shift = (new Date()).getTime()-req.body.time;
      }
      req.body.setOpenTime?lock.setOpenTime.setTime(req.body.setOpenTime):lock.setOpenTime;
      req.body.setCloseTime?lock.setCloseTime.setTime(req.body.setCloseTime):lock.setCloseTime;
      req.body.open?lock.setOpen = req.body.open:lock.setOpen;
      req.body.signalFind?lock.signal = req.body.signalFind:lock.signal;

      if(req.body.setMode == MODE.family && req.body.setPIN && req.body.setOpenTime && req.body.setCloseTime)
      {
        lock.mode = req.body.setMode;
        lock.PIN = req.body.setPIN;
        lock.setOpenTime.setTime(req.body.setOpenTime);
        lock.setCloseTime.setTime(req.body.setCloseTime);
      }
      else if(req.body.setMode == MODE.biohack && req.body.setOpenTime && req.body.setCloseTime)
      {
        lock.mode = req.body.setMode;
        lock.setOpenTime.setTime(req.body.setOpenTime);
        lock.setCloseTime.setTime(req.body.setCloseTime);
      }
      else if(req.body.addQuestion && req.body.addAnswer)
        lock.qa.push(new Pair(req.body.addQuestion,req.body.addAnswer));

      res.send(JSON.stringify({"succ": true, "state": lock.state, "curTime": lock.time, "battery": lock.battery}));
      return;
    }
    else if(lock.mode = MODE.family)
    {
      if((new Date().getTime() - lock.shift) > lock.setCloseTime.getTime() || (new Date().getTime() - lock.shift) < lock.setOpenTime.getTime())
      {
        if(!req.body.PIN)
        {
          res.send({"succ": false, "message": "No PIN"});
          return;
        }
        else if(req.body.PIN != lock.PIN)
        {
          res.send({"succ": false, "message": "Wrong PIN"});
          return;
        }
        res.send({"succ": false, "message": "Something wrong."});
        return;
      }
      
      if(req.body.time)
      {
        lock.setTime.setTime(req.body.time);
        lock.shift = (new Date()).getTime()-req.body.time;
      }

      req.body.setOpenTime?lock.setOpenTime.setTime(req.body.setOpenTime):lock.setOpenTime;
      req.body.setCloseTime?lock.setCloseTime.setTime(req.body.setCloseTime):lock.setCloseTime;
      req.body.open?lock.setOpen = req.body.open:lock.setOpen;
      req.body.signalFind?lock.signal = req.body.signalFind:lock.signal;
      req.body.setPIN?lock.PIN = req.body.setPIN:lock.PIN;

      if(req.body.setMode == MODE.biohack && req.body.setOpenTime && req.body.setCloseTime)
      {
        lock.mode = req.body.setMode;
        lock.setOpenTime.setTime(req.body.setOpenTime);
        lock.setCloseTime.setTime(req.body.setCloseTime);
      }
      else if(req.body.setMode == MODE.fitness)
      {
        lock.mode = MODE.fitness;
        lock.qa = [];
        lock.curQuestion = 0;
      }

      res.send(JSON.stringify({"succ": true, "state": lock.state, "curTime": lock.time, "battery": lock.battery}));
      return;
    }
    else if(lock.mode = MODE.biohack)
    {
      let curTime = new Date().getTime();
      if((curTime - lock.shift) > lock.setCloseTime.getTime() || (curTime - lock.shift) < lock.setOpenTime.getTime())
      {
        res.send({"succ": false, "message": "Not in time", "closeTime": lock.setCloseTime.getTime(), "openTime": lock.setOpenTime.getTime(), "curServTime": new Date().get});
        return;
      }

      if(req.body.time)
      {
        lock.setTime.setTime(req.body.time);
        lock.shift = (new Date()).getTime()-req.body.time;
      }

      req.body.setOpenTime?lock.setOpenTime.setTime(req.body.setOpenTime):lock.setOpenTime;
      req.body.setCloseTime?lock.setCloseTime.setTime(req.body.setCloseTime):lock.setCloseTime;
      req.body.open?lock.setOpen = req.body.open:lock.setOpen;
      req.body.signalFind?lock.signal = req.body.signalFind:lock.signal;

      if(req.body.setMode == MODE.fitness)
      {
        lock.mode = MODE.fitness;
        lock.qa = [];
        lock.curQuestion = 0;
      }
      else if(req.body.setMode == MODE.family && req.body.setPIN && req.body.setOpenTime && req.body.setCloseTime)
      {
        lock.mode = req.body.setMode;
        lock.PIN = req.body.setPIN;
        lock.setOpenTime.setTime(req.body.setOpenTime);
        lock.setCloseTime.setTime(req.body.setCloseTime);
      }

      res.send(JSON.stringify({"succ": true, "state": lock.state, "curTime": lock.time, "battery": lock.battery}));
    }

  }
});


app.get('/', function (req, res) {
  var resp = "\b";

  

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



  users.push(new User('1'));
  users.push(new User('2'));
  users.push(new User('3'));
  users.push(new User('4'));

  hubs.push(new Hub('1','First'));
  hubs.push(new Hub('2','Second'));
  hubs.push(new Hub('3','First'));
  hubs.push(new Hub('4','Second'));
  hubs.push(new Hub('5','First'));

  locks.push(new Lock('1','First'));
  locks.push(new Lock('2','Second'));
  locks.push(new Lock('3','First'));
  locks.push(new Lock('4','First'));
  locks.push(new Lock('5','Second'));
  locks.push(new Lock('6','Third'));
  locks.push(new Lock('7','First'));
  locks.push(new Lock('8','Second'));
  locks.push(new Lock('9','First'));

  users[0].hubs.push(hubs[0]);
  users[0].hubs.push(hubs[1]);
  users[1].hubs.push(hubs[2]);
  users[1].hubs.push(hubs[3]);
  users[2].hubs.push(hubs[4]);

  users[0].hubs[0].locks.push(locks[0]);
  users[0].hubs[0].locks.push(locks[1]);
  users[0].hubs[1].locks.push(locks[2]);
  users[1].hubs[0].locks.push(locks[3]);
  users[1].hubs[0].locks.push(locks[4]);
  users[1].hubs[0].locks.push(locks[5]);
  users[1].hubs[1].locks.push(locks[6]);
  users[1].hubs[1].locks.push(locks[7]);
  users[2].hubs[0].locks.push(locks[8]);

 // console.log(JSON.stringify(users));
 // first = false;


app.listen(port, ip);
console.log('Server running on http://%s:%s', ip, port);

module.exports = app ;
