const User = require("../../modles/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// 🔐 Register
register = async (req, res) => {
  const { name, email, password, role } = req.body;

  try {
    // Check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: "User already exists" });

    console.log("Raw password from client:", password);

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    console.log("Hashed password:", hashedPassword);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      role // "organizer" or "attendee"
    });

    await newUser.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    res.status(500).json({ message: "Error registering user", error: err.message });
  }
};

// 🔓 Login
login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email }).select('+password');
    if (!user) return res.status(400).json({ message: "Invalid email or password" });
     console.log("entered password",password)
     console.log("Stored hash:", user.password);
    const isMatch = await bcrypt.compare(password, user.password);
    console.log(isMatch)
    if (!isMatch) return res.status(400).json({ message: "Invalid email or password" });

    // Create token
    const token = jwt.sign({ id: user._id, role: user.role , name:user.name }, "mySuperSecretKey", {
      expiresIn: "1d"
    });

    res.status(200).json({ token, user: { id: user._id, name: user.name, role: user.role } });
  } catch (err) {
    res.status(500).json({ message: "Login failed", error: err.message });
  }
};

// 👤 Get Profile (if you want)
getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    if (!user) return res.status(404).json({ message: "User not found" });
    res.status(200).json({ user });
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch profile", error: err.message });
  }
};

module.exports={register,login,getProfile}