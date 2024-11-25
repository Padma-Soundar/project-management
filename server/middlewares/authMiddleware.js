const jwt = require("jsonwebtoken");
console.log("Current directory:", __dirname);
console.log("Environment variables loaded:", process.env.JWT_SECRET ? "Yes" : "No");
console.log("MONGO_URI:", process.env.JWT_SECRET);
module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decryptedToken = jwt.verify(token, process.env.JWT_SECRET);
    req.body.userId = decryptedToken.userId;
    next();
  } catch (error) {
    
    res.send({
      success: false,
      message: error.message,
    });
  }
};
