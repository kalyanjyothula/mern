const asyncHandler = require('express-async-handler')
const User = require("../models/userModel")
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')


const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  // console.log("running register", req)
  if (!name || !email || !password) {
    res.status(404)
    throw new Error("Please add all fileds !")
  }
  const userExist = await User.findOne({ email })

  if (userExist) {
    res.status(400)
    throw new Error("user already exist !!")
  }

  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)


  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  })
  console.log("db action !")
  if (user) {
    res.status(201).json({
      success: true,
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id)
    })
  } else {
    res.status(400)
    throw new Error("Invalide user data")
  }

  // res.json({ message: "register user !" })

})


const loginUser = asyncHandler(async (req, res) => {

  const { email, password } = req.body;
  const user = await User.findOne({ email })
  const passwordCheck = await bcrypt.compare(password, user.password);
  // console.log(user, passwordCheck, "login Backend");
  if (user && passwordCheck) {
    res.status(200).json(
      {
        success: true,
        _id: user.id,
        name: user.name,
        email: user.email,
        token: generateToken(user._id)
      }
    )
  } else {
    res.status(400)
    throw new Error("Invalid credentials !")
  }
  // res.json({ message: "login User !" })

})

const getMe = asyncHandler(async (req, res) => {
  res.status(200).json(req.user)
})

const generateToken = (id) => {
  return jwt.sign({ id }, `${process.env.JWT_SECRET}`, { expiresIn: '30d' })
}


module.exports = {
  registerUser,
  loginUser,
  getMe
}