const path = require('path');
const express = require('express');
const app = express();
const cors = require('cors');
const port = 8080;

app.use(cors());
app.use(express.static(path.resolve(__dirname, './dist')));

app.listen(port, () => console.log(`listening on port ${port}\n________________\n\n`));