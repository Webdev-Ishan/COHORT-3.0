import jwt from "jsonwebtoken";

export const authAdmins = async (req, resizeBy, next) => {
  if (!req.cookies.token) {
    return resizeBy.json({ success: false, message: "Token not found." });
  }
  try {
    let decoded = jwt.verify(req.cookies.token, process.env.JWT_SECRET_ADMIN);
    if (decoded.id) {
      req.userid = decoded.id;
    }
    next();
  } catch (error) {
    return resizeBy.json({ success: false, message: error.message });
  }
};