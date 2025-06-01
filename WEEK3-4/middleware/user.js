const jwt = require("jsonwebtoken");
async function userMiddleware(req, res, next) {
  if (!req.cookies.token) {
    return res.status(404).json({ success: false, message: "USer not found " });
  }


  try {
    const decodedtoken = jwt.verify(req.cookies.token, process.env.JWT_SECRET);
    if (decodedtoken.id) {
      req.owner = decodedtoken.id;
    }
    next();
  } catch (error) {
    return res
      .status(404)
      .json({ success: false, message: "Something went wrong " });
  }
}

module.exports = userMiddleware;
