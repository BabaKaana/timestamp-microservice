var express = require('express');
var app = express();

var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));

app.use(express.static('public'));

app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});



app.get('/api/:date?', (req, res)=>{

  let date;

  if(!req.params.date){
    date = new Date();
  }

  else if (!isNaN(req.params.date)){
    date = new Date(Number(req.params.date));
  } 
  
  else {
    date = new Date(req.params.date)
  }

  if (isNaN(date.getTime())){
    res.json({ error : "Invalid Date" });
    return;
  }

  res.json({
    unix: date.getTime(),
    utc: date.toUTCString()
  })
})




var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
