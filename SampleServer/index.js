const express = require('express')
const bodyParser = require('body-parser')
const routes = require('./src/routes')

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const router = express.Router()
Object.values(routes).forEach((route) => {
  for (let path in route) {
    const operations = route[path]
    for (let httpMethod in operations) {
      const handler = operations[httpMethod]
      const middlewares = []
      const controller = require(`./src/controller/${handler.controller}`)[handler.method]
      middlewares.push(controller)
      router[httpMethod](path, middlewares.map((middleware) => (
        async function errorHandlerMiddlewareWrapper(req, res, next) {
          try {
            await middleware(req, res, next)
          } catch (e) {
            next(e, req, res, next)
          }
        }
      )))
    }
  }
})

app.use('/', router)
app.use((err, req, res, next) => {
  console.log(err)
  res.status(400).send('Error')
})

app.listen(3000, () => console.log('Listening'))
