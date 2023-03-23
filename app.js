require('dotenv').config();
const express = require("express");
const passport = require("passport")
const cors = require("cors");
const morgan = require("morgan")
const app = express();

const router = require('./routes');
// const { initialize } = require('passport');
app.use(morgan('dev'));
app.use(cors());
app.use(express.json())
app.use("/api",router)
app.use(passport.initialize())
require("./middleware/passport")(passport)



module.exports = app