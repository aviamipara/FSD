const express = require('express');
const path = require('path');
const app = express();


app.use(express.static(__dirname , {index : "148.html"}))

app.listen(3030)