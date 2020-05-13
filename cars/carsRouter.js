const express = require('express');

const db = require('../data/dbConnection');

const router = express.Router();

router.get('/', (req, res) => {
	db('cars')
		.then((response) => {
			res.status(200).json(response);
		})
		.catch((error) => {
			res.status(500).json(error.message);
		});
});

router.get('/:id', (req, res) => {
	db('cars')
		.where('id', req.params.id)
		.then((response) => {
			res.status(200).json(response);
		})
		.catch((error) => {
			res.status(500).json(error.message);
		});
});

router.post('/', (req, res) => {
	db('cars')
		.insert(req.body)
		.then((response) => {
			res.status(201).json(response);
		})
		.catch((error) => {
			res.status(500).json(error.message);
		});
});

router.put('/:id', (req, res) => {
	db('cars')
		.where('id', req.params.id)
		.update(req.body)
		.then((response) => {
			res.status(200).json(response);
		})
		.catch((error) => {
			res.status(500).json(error.message);
		});
});

router.delete('/:id', (req, res) => {
	db('cars')
		.where('id', req.params.id)
		.delete()
		.then((response) => {
			res.status(200).json(response);
		})
		.catch((error) => {
			res.status(500).json(error.message);
		});
});

module.exports = router;
