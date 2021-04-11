const server = require('./server')

const port = process.env.PORT || 3000

server.listen(port, () => {
  // eslint-disable-next-line no-console
  console.info(`Server listening at http://localhost:${port}`)
})