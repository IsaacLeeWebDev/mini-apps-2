const path = require('path');
const express = require('express');
const app = express();
const port = 3000;

app.use(express.static(path.resolve(__dirname, 'public')));

app.listen(port, () => console.log(`listening on ${port}\nV^V^V^V^V^V^V^V^V^V^V^V^V\n\n`));

