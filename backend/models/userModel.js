const mongoose = require('mongoose')
const validator = require("validator");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please add Name field !'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Please add Email field !'],
      unique: true,
      trim: true,
      validate: {
        validator: validator.isEmail,
        // message: `${VALUE} is not a valid email !`
      }
    },
    password: {
      type: String,
      required: [true, 'Please add Password field !'],
      trim: true,
    }

  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('User', userSchema);
