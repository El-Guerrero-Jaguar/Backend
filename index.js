const express = require('express');
const app = express();
const { PORT } = require("./config").config;
const api = require("./routes");
app.get('/',(req,res) => {
    res.send('Hello world');
});
api(app);

app.listen(PORT);