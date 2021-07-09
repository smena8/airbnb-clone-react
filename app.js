const express = require('express');
const { resolve } = require('path');
const path = require('path');

const app = express()
const port = process.env.PORT || 5000 // Heroku will need the PORT environment variable

if(process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'build')));
    app.get('*', (req, res) => {
        req.sendfile(path, resolve(__dirname, 'build', 'index.html'));
    })
}

app.listen(port, (err) => {
    if (err) {
        return console.log(err);
    } else {
    console.log(`App is live on port ${port}!`);
    }
});