const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
app.use(express.static('public'));
// Register Handlebars view engine
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    extname: '.hbs',
}));
// Use Handlebars view engine
app.set('view engine', '.hbs');

app.get('/', (req, res) => {
  res.render('index', { title: 'Fishing Planet Cheat Sheet' });
});

app.get('/about', (req, res) => {
    res.render('about', {title: 'About'});
  });

  app.get('/unis/kalifornien', (req, res) => {
    res.render('unis-kalifornien', {title: 'Uni-Zeiten Kalifornien'});
  });

app.listen(3000, () => {
  console.log('Example app is running → PORT 3000');
});