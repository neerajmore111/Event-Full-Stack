const jwt = require("jsonwebtoken");

auth = function (req, res, next) {
  const token = req.headers["authorization"]?.split(" ")[1];
  console.log(token)
  if (!token) return res.status(401).json({ error: "No token provided" });

  try {
    const decoded = jwt.verify(token, "mySuperSecretKey");
    req.user = decoded;
    // req.user = { _id: decoded.id, role: decoded.role };
    console.log("Decoded:", decoded);
    console.log("req.user:", req.user);
    next();
  }catch (err) {
    if (err.name === "TokenExpiredError") {
      return res.status(401).json({ error: "Token expired. Please log in again." });
    }
    res.status(401).json({ error: "Invalid token" });
  }
  // catch (err) {
  //   res.status(403).json({ error: "Invalid token" });
  // }
};

module.exports ={auth}