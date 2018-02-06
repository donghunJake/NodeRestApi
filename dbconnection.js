/**
 * http://usejsdoc.org/
 */
var mysql = require('mysql');

var connection = mysql.createPool({

	host : 'localhost',
	user : 'root',
	password : 'cs0319',
	database : 'o2'

});

module.exports = connection;