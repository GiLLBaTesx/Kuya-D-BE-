require('dotenv').config();

const mongoose = require('mongoose');

const connectionStr = `mongodb+srv://eco-mern:Shalomisrael777@cluster0.wwm19p6.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(connectionStr, {useNewUrlparser: true})
.then(() => console.log('connected to mongodb'))
.catch(err => console.log(err))

mongoose.connection.on('error', err => {
  console.log(err)
})

// mongodb+srv://<username>:<password>@cluster0.wwm19p6.mongodb.net/?retryWrites=true&w=majority

// `mongodb+srv://:${process.env.MONGO_USERNAME}:${process.env.MONGO_PW}@cluster0.wwm19p6.mongodb.net/eco-mern?retryWrites=true&w=majority`

