const path = require('path');
const express = require('express');
const hbs = require('hbs');

const port = process.env.PORT || 3000;

const publicPath = path.join(__dirname, '..', '/public');
const hbsPath = path.join((__dirname, '..', '/views'));

const app = express();
app.use(express.static(publicPath));

// hbs.registerPartials(hbsPath);
// app.set('view engine', 'hbs');
//
// app.get('/', (req, res) => {
//     res.render('index.hbs', {
//         title: "the chat app"
//     })
// });

app.listen(port,() => {
    console.log(`Started on Port ${port}`);
});