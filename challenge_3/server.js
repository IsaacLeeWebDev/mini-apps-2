const path = require('path');
const express = require('express');
const app = express();
const port = 8888;

app.use(express.static('public'));

app.listen(port, `listening on ${port}\nV^V^V^V^V^V^V\n\n`);

