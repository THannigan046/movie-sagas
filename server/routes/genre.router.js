const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/', (req, res) => {
  // Add query to get all genres

  const queryText = `
  SELECT name AS genre FROM genres
  `
  pool.query(queryText)
    .then(res => {
      res.send(result.rows)
    })
    .catch(err => {
      console.log('GET genres error', err);
      res.sendStatus(500)
    })
});

module.exports = router;