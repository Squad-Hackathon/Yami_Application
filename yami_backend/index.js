const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!, this is the start of a great project!!');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});