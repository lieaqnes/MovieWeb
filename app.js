var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var port = process.env.PORT || 3000;
var app = express();

app.set('views', './views/pages');
app.set('view engine', 'jade');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'bower_components')));
app.listen(port);

console.log('movieweb started on port ' + port);

//index page
app.get('/', function(req, res) {
  res.render('index', {
    title: 'movie homepage',
    movies: [{
      title: '单身男女',
      _id: 1,
      poster: 'http://1111'
    },
    {
      title: '单身男女',
      _id: 2,
      poster: 'http://1111'
    },
    {
      title: '单身男女',
      _id: 3,
      poster: 'http://1111'
    },
    {
      title: '单身男女',
      _id: 4,
      poster: 'http://1111'
    },
    {
      title: '单身男女',
      _id: 5,
      poster: 'http://1111'
    },
    {
      title: '单身男女',
      _id: 6,
      poster: 'http://1111'
    }]
  });
});

//detail page
app.get('/movie/:id', function(req, res) {
  res.render('detail', {
    title: 'movie detail',
    movie: {
      director: 'aaaa',
      country: 'American',
      title: 'bbbbbb',
      year: 2000,
      poster: 'http://aaaaaaaaa',
      language: 'chinese',
      flash: 'http://22222',
      summary: 'sdfsdfsafsdfsdfdsfsdafadsfsdfsdfdsf'
    }
  });
});

//list page
app.get('/admin/list', function(req, res) {
  res.render('list', {
    title: 'movie list',
    movies: [{
      director: 'aaaa',
      _id: 1,
      country: 'American',
      title: 'bbbbbb',
      year: 2000,
      poster: 'http://aaaaaaaaa',
      language: 'chinese',
      flash: 'http://22222',
      summary: 'sdfsdfsafsdfsdfdsfsdafadsfsdfsdfdsf'
    }]
  });
});

//admin page
app.get('/admin/movie', function(req, res) {
  res.render('admin', {
    title: 'movie admin',
    movie: {
      director: '',
      country: '',
      title: '',
      year: '',
      poster: '',
      language: '',
      flash: '',
      summary: ''
    }
  });
});
