const errorMiddleware = (error, req, res, next) => {
  if (error.status) {
    res.status(error.status).json(error.message)
  }
  console.log(error)
  res.status(500).json("Internal server error")
}

module.exports = {
  errorMiddleware
}
