import express from 'express'
import initWebRoute from './route/web.js'

require('dotenv').config()

const app = express()
const port = process.env.PORT || 1111

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

initWebRoute(app)

app.listen(port, () => {
  console.log(`\nApp running at: \n\t\thttp://localhost:${port}`)
})