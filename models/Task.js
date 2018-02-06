/**
 * http://usejsdoc.org/
 */
var express = require('express');
var mysql = require('mysql');

var conn = require('../dbconnection');

var Task = {};

Task.find = function(callback){
	return conn.query("SELECT * FROM task", callback);
};


Task.findById = function(id, callback){
	return conn.query("SELECT * FROM task where Id = ?", id, callback);
};

module.exports = Task; 