/**
 * http://usejsdoc.org/
 */
var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var conn = require('../dbconnection');

var Task = require('../models/Task.js');

router.get('/', function(req, res, next) {
	Task.find(function(err, Tasks) {
		if (err) {
			return next(err);
		}
		res.json(Tasks);
	});
});

/* GET SINGLE Task BY ID */
router.get('/:id', function(req, res, next) {
	Task.findById(req.params.id, function(err, post) {
		if (err) {
			return next(err);
		}
		res.json(post);
	});
});

module.exports = router;