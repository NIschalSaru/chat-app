import jwt from "jsonwebtoken";

const generateAccessToken = (userData, res) => {
  const token = jwt.sign({ userData }, process.env.JWT_SECRET, {
    expiresIn: "3d",
  });

  res.cookie("authToken", token, {
    maxAge: 15 * 24 * 60 * 60 * 1000, // 15 days
    httpOnly: true, //prevent XSS attacks cross-site scripting attacks, prevent acces of this cookie via JavaScript
    sameSite: "strict", // CSRF protection, preventing attacks like cross-site request forgery attacks
    secure: process.env.NODE_ENV !== "development",
  });

  return token;
};

export default generateAccessToken;
