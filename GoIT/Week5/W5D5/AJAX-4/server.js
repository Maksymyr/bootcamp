var express = require('express');
var app = new express();
var bodyParser = require('body-parser');
var mailer = require('express-mailer');
app.use(bodyParser());
var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: true });

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

app.get('/', function(req,res){
    res.sendFile(__dirname+'/index.html');
});
app.post('/sum', function(req,res){
    var x = parseInt(req.body.num1,10);
    var y = parseInt(req.body.num2,10);
    var z = x+y;
    res.end(`${z}`);
});
app.post('/year', function(req,res){
    console.log(req.body.num1);
    var x = 2017 - parseInt(req.body.num1,10);
    res.end(`${x}`);
});
app.post('/weight', function(req,res){
    console.log(req.body.num1);
    var sex = req.body.sex;
    var height = parseInt(req.body.height,10);
    var out = '';
    if (sex == 'women'){
        out = height-120;
    }else if (sex == 'men'){
        out = height-100;
    }
    else{
        out = 'error';
    }
    res.end(`${out}`);
});


mailer.extend(app, {
    from: 'asdewcdsa@gmail.com',
    host: 'smtp.gmail.com', // hostname
    secureConnection: true, // use SSL
    port: 465, // port for secure SMTP
    transportMethod: 'SMTP', // default is SMTP. Accepts anything that nodemailer accepts
    auth: {
        user: 'asdewcdsa@gmail.com',
        pass: '1qazxsw23edcvfr4'
    }
});

app.post('/mail', function(req,res){
    app.mailer.send('email', {
        to: req.body.email, // REQUIRED. This can be a comma delimited string just like a normal email to field.
        subject: 'Test Email', // REQUIRED.
        fio: req.body.fio,
        tel: req.body.phone// All additional properties are also passed to the template as local variables.
    }, function (err) {
        if (err) {
            // handle error
            console.log(err);
            res.send('There was an error sending the email');
            return;
        }
        res.send('Email Sent');
    });
});


app.listen(2000);