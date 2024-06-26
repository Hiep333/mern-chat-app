import jwt from 'jsonwebtoken';

const generateTokenAndSetCookie = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "15d",
  });
  res.cookie("jwt", token, {
    maxAge: 15 * 24 * 60 * 60 * 1000, // 15 ngày
    httpOnly: true,
    sameSite: "strict",
    secure: false // Sử dụng HTTP, vì vậy secure nên là false
  });

  console.log("Token generated and cookie set: ", token);
};

export default generateTokenAndSetCookie;
