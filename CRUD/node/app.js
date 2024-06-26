const port = 3000
const express = require('express');
const cors = require('cors');
const app = express()
const mongoose = require('mongoose')
const userRoutes= require("./routes/user.route")


app.use(cors());

app.use(express.json())
app.get('/', (req, res) => {
  res.send('Running')
})

app.use(userRoutes);

async function connectDb() {
   await mongoose.connect("mongodb+srv://krishnaidu2556:zbZi1ygs7stadAcJ@krish.ixoxo9t.mongodb.net/?retryWrites=true&w=majority&appName=krish",{
    dbName:"UserDb"})

    console.log('the db is connect with ${mongoose.connection.host}');
}


connectDb().catch((err)=>console.error(err));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

