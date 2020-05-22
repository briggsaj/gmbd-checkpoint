const Pool = require('pg').Pool
const pool = new Pool({
  user: 'me',
  host: 'localhost',
  database: 'api',
  password: 'password',
  port: 5432,
})

const getMovies = (request, response) => {
  if(request.query.title) {
    pool.query('SELECT * FROM movies WHERE title = $1', [request.query.title], (error, results) => {
    if (error) {
      throw error
      }
      response.status(200).json(results.rows)
    })     
  }
  /*
  else if(equest.query.review)  {
    pool.query('SELECT * FROM reviews WHERE id = $1', [request.query.id], (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).json(results.rows)
      })
  }*/
  else {
    pool.query('SELECT * FROM movies', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }
}

const getMoviesByID = (request, response) => {
  const id = parseInt(request.params.id)
  
  pool.query('SELECT * FROM movies WHERE id = $1', [id], (error, results) => {
  if (error) {
    throw error
    }
    response.status(200).json(results.rows)
  })
}




 module.exports = {getMovies, getMoviesByID}