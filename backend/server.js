const express = require("express");
const dotenv = require('dotenv').config();
const color = require('colors');

const connectDB = require('./config/connection');
const errorHandler = require("./middleware/errorMiddleware");

connectDB()
const PORT = process.env.PORT || 5000;

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }));



/* --------------  Apis  ------------------  */

app.use('/api/goals', require('./routes/goalsRouter'));
app.use('/api/user', require('./routes/userRouter'))

/* --------------   Error Handle ------------------- */
app.use(errorHandler)

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));