const express = require('express')
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/getList', (req, res) => {
    res.send('Show the list of data');
});

app.post('/login', (req, res) => {
    const requestData = req.body;
    if(requestData.email === "lameen@gmail.com" && requestData.password === "123") {
        res.send({code: 0, message: ""});
    }
    else {
        res.send({code: -1, message: "The login is invalid"});
    }
});

app.post('/createAccount', (req, res) => {
    const requestData = req.body;
    if(requestData.email === "lameen@gmail.com") {
        res.send({code: 0, message: "Successfully account created"});
    }
    else {
        res.send({code: -1, message: "Something went wrong! please try again later"});
    }
});

app.post('/saveMyProfile', (req, res) => {
    const requestData = req.body;
    if(requestData.email === "lameen@gmail.com") {
        res.send({code: 0, message: "Successfully saved"});
    }
    else {
        res.send({code: -1, message: "Something went wrong! please try again later"});
    }
});

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));