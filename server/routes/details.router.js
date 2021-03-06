const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')


router.get('/:id', (req, res) => {
    const movieId = req.params.id
    console.log('made it to server', req.params.id);

  const query = `
  SELECT  
  movies.title, 
  movies.poster,
  movies.description,
  ARRAY_AGG (genres.name) genres
  FROM movies 
  JOIN movies_genres 
    ON movies_genres.movie_id = movies.id
  JOIN genres 
    ON genres.id = movies_genres.genre_id
WHERE movies.id=$1
  GROUP BY movies.id, title, poster, description;
  `;
    pool.query(query, [movieId])
        .then(result => {
            console.log('query success');
            res.send(result.rows);
        })
        .catch(err => {
            console.log('ERROR: Get all details', err);
            res.sendStatus(500)
        })
});

module.exports = router