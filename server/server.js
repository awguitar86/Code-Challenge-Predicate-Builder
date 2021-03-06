const express = require('express');
const bodyParser = require('body-parser');
const port = 8080;

const app = express();

app.use(bodyParser.json());

app.listen(port, () =>
    console.log(`===================================\n Server is listening on port ${port}.\n===================================`
));