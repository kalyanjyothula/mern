const path = require('path');
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

// Serve frontend
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../frontend/build')));
  
    app.get('*', (req, res) =>
      res.sendFile(
        path.resolve(__dirname, '../', 'frontend', 'build', 'index.html')
      )
    );
  } else {
    app.get('/', (req, res) => res.send('Please set to production'));
  }

/* --------------   Error Handle ------------------- */
app.use(errorHandler)

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));