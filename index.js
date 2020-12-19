const express = require('express');
const https = require('https');
const fs = require('fs');
const app = express();
const { PORT } = require("./config").config;
const api = require("./routes");
app.get('/',(req,res) => {
    res.send('Hello world');
});
api(app);
https.createServer({
    key: fs.readFileSync('./key.pem'),
    cert: fs.readFileSync('./cert.pem'),
    passphrase: 'YOUR PASSPHRASE HERE'
}, app)
.listen(PORT);