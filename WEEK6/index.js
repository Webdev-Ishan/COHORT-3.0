const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
const users = [{}];

app.get("/", (req, res) => {
  res.send("Working");
});

app.post("/signup", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.json({ success: false, message: "Error" });
  }
  try {
    let exist = users.find(
      (user) => email === user.email && password === user.password
    );
    if (exist) {
      return res.json({ success: false, message: "Already signed up." });
    }

    let token = jwt.sign({ id: password }, "secret", {
      expiresIn: "1d",
    });
    res.cookie("token", token, {
      maxAge: 24 * 60 * 60 * 1000,
      httpOnly: true,
      sameSite: "none",
    });

    users.push({ email, password });
    return res.json({ success: true, message: "You are signed up" });
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
});

app.post("/signin", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.json({ success: false, message: "Error" });
  }
  try {
    let exist = users.find(
      (user) => email === user.email && password === user.password
    );
    if (!exist) {
      return res.json({ success: false, message: "Sign up please" });
    }

    let decode = jwt.verify(req.cookies.token, "secret");
    if (!decode) {
      return res.json({ success: false, message: "Sign up first" });
    }

    let token = jwt.sign({ id: password }, "secret", {
      expiresIn: "1d",
    });
    res.cookie("token", token, {
      maxAge: 24 * 60 * 60 * 1000,
      httpOnly: true,
      sameSite: "none",
    });

    return res.json({ success: true, message: "You are signed in", exist });
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
});


app.get("/me",(req,res)=>{
    const token = req.cookies.token;

    if(!token){
        return res.json({ success: false, message: "Token not found" });
    }
    try {

        let decode = jwt.verify(token,"secret");
        if(!decode){
            return res.json({ success: false, message: "Token not found" });
        }

        let userinfo = users.find((user)=>user.password===decode.id )

        return res.json({userinfo});
        
    } catch (error) {
        return res.json({ success: false, message: error.message });
    }
})

app.listen(3000, () => {
  console.log("Server is running on 3000");
});
