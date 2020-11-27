var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors= require('cors');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var basicinforouter= require('./routes/basicInfo_router');
var permanantaddrouter= require('./routes/permanantadd_router');
var presentaddrouter= require('./routes/presentadd_router');
var qualificationrouter= require('./routes/qualification_router');
var prevemprouter= require('./routes/prevemp_router');
 var skillrouter= require('./routes/skill_router');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/basicinfo', basicinforouter);
app.use('/permanantadd', permanantaddrouter);
app.use('/presentadd', presentaddrouter);
app.use('/qualification', qualificationrouter);
app.use('/prevemp', prevemprouter);
app.use('/skill', skillrouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
