const express = require("express")
require("dotenv").config();
const app = express()
// const port = 9000/
const uploadRouter = require('./routes/upload.routes')
const port = process.env.PORT || 9000;

app.use(express.json())
app.use('/upload', uploadRouter)

app.listen(port, () => {
  console.log(`Server is running on port:${port}`)
})

require('dotenv').config()