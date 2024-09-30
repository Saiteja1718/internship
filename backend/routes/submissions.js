const express = require('express');
const router = express.Router();
const db = require('../server').db;

// POST route to create new submission
router.post('/', (req, res) => {
  const { name, condition, disposalMethod } = req.body;
  const sql = 'INSERT INTO submissions (name, condition, disposalMethod) VALUES (?, ?, ?)';

  db.query(sql, [name, condition, disposalMethod], (err, result) => {
    if (err) {
      console.error('Error submitting apparel:', err);
      res.status(500).json({ message: 'Error submitting apparel' });
    } else {
      res.status(201).json({ message: 'Apparel submitted', id: result.insertId });
    }
  });
});

// GET route to fetch all submissions
router.get('/', (req, res) => {
  const sql = 'SELECT * FROM submissions';
  db.query(sql, (err, results) => {
    if (err) {
      console.error('Error fetching submissions:', err);
      res.status(500).json({ message: 'Error fetching submissions' });
    } else {
      res.json(results);
    }
  });
});

module.exports = router;
