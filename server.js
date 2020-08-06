const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
var app = express();
var serv = require('http').Server(app);
var logger = require('./utils/logger.js');
var port = 35565;

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

app.use(bodyParser.urlencoded({ extended: true }));
serv.listen(port);

logger.start();
logger.s();
logger.log('Port: ' + port);
logger.s();

app.use(express.static(__dirname + '/public'));

app.post('/public', (req, res) => {
    var bod = req.body;
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        requireTLS: true,
        auth: {
            user: '------------@gmail.com',
            pass: '------------'
        }
    });

    let mailOptions = {
        from: '------------@gmail.com',
        to: '------------@gmail.com',
        subject: 'Ginger Eats | Order Confirmation',
        text: 'Name: ' + bod.name + 
        '\nContact: ' + bod.number + 
        '\nAddress: ' + bod.address + 
        '\nRestaurant: ' + bod.restaurant + 
        '\nOrder: ' + bod.order + ''
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error.message);
        }
        console.log('success');
        res.redirect('/confirmation');
    });
});