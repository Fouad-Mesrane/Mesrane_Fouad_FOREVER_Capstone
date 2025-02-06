import User from "../models/User.js";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import "dotenv/config";

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET_KEY, { expiresIn: "1d" });
};

// user login
export const loginUser = async (req, res) => {
  res.send("Login User");
};

// user register
export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    // check user exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res
        .status(400)
        .json({ success: false, message: "User already exists" });
    }

    // validation for email and password

    if (!validator.isEmail(email)) {
      return res
        .status(400)
        .json({ success: false, message: "Please enter a valid email" });
    }
    if (password.length < 8) {
      return res.status(400).json({
        success: false,
        message: "Please enter a password of at least 8 characters",
      });
    }

    // hashing user password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    // saving user in db
    const user = await newUser.save();

    // generating token
    const token = createToken(user._id);

    res.status(201).json({ success: true, user, token });
  } catch (error) {
    console.log(error);
    res.status(400).json({ success: false, message: error.message });
  }
};

// admin login
export const adminLogin = async (req, res) => {
  res.send("Admin Login");
};
