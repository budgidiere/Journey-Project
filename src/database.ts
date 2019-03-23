var fs = require('fs');
var SQL = require('sql.js');
var filebuffer = fs.readFileSync('sqlite.sqlite');

var db = new SQL.Database(filebuffer);