const express = require('express')
const cors=require('cors')
const app = express()
require('dotenv').config()
require('./connection/db')
const userRoute=require("./routes/UserRoute");
const appointmentRoute=require("./routes/AppoinmentRoute");
const port = process.env.PORT || 8080


app.use(cors())
app.use(express.json())
app.use("/api",userRoute);
app.use('/api',appointmentRoute)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})