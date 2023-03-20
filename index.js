// require('dotenv').config();
const app = require("./app")
const mongoose = require('mongoose');

const port =process.env.PORT|| 5000
mongoose.connect('mongodb://127.0.0.1:27017/shop')
.then(() => console.log('Connected!'))
.catch(error =>console.log(error))
app.listen(port, ()=>console.log(`server run:${port}`))