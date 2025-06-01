const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const UserRoutes = require("./routes/user.js")
const app = express();
const port = process.env.PORT;
const cookieParser = require('cookie-parser')

app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())
app.get("/", (req, res)=> res.send("I am Healthy"));
app.use('/api/user',UserRoutes);

//  start writing your routes here

app.listen(port, ()=> console.log(`server is running at http://localhost:${port}`));
