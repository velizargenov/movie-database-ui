const apiHandler = require('./services/api')

apiHandler.fetchSearchedMovies('matrix').then((data) => {
  console.log(data)
})
