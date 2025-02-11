const express = require('express');

const app = express();
// const ejs = require('ejs');
const bodyParser = require('body-parser');
const { areAnagrams } = require('./controllers/anagram');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));

app.get('/anagramcheckerform', (req, res) => {
    res.render('anagramchecker', {result: '', string1: '', string2: ''});
})

app.post('/anagramchecker', (req, res) => {
    const string1 = req.body.string1
    const string2 = req.body.string2
    const result = areAnagrams(string1, string2);
    res.render('anagramchecker', {result, string1, string2});
});

app.listen(5500);