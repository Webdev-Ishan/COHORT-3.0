"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Profile = exports.Signin = exports.signUp = void 0;
const app_1 = require("./app");
const signUp = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, email } = req.body;
    if (!username || !email) {
        res.status(403).json({
            success: false,
            message: "Input Not found",
        });
    }
    try {
        const response = yield app_1.pgclient.query(`INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *`, [username, email]);
        res.status(200).json({
            success: true,
            user: response.rows[0],
            message: "Signup successful",
        });
    }
    catch (error) {
        console.error("Signup Error:", error);
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
});
exports.signUp = signUp;
const Signin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email } = req.body;
    if (!email) {
        res.status(403).json({
            success: false,
            message: "Enter email please",
        });
    }
    try {
        // await pgclient.query("BEGIN;");
        let response = yield app_1.pgclient.query(`SELECT * FROM users WHERE email = $1`, [email]);
        // res.json({
        //   message:"Unable to login becuase of transcation laws"
        // })
        // process.exit(1);
        // await pgclient.query(`UPDATE users SET email = $1 WHERE email = $2`, [
        //   "srishti@gmail.com",
        //   response.rows[0].email,
        // ]);
        // await pgclient.query("COMMIT;");
        if (!response) {
            res.status(403).json({
                succes: false,
                message: "SOmething went wrong",
            });
        }
        res.status(200).json({
            success: true,
            user: response.rows[0],
        });
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    }
});
exports.Signin = Signin;
const Profile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email } = req.body;
    if (!email) {
        res.status(403).json({
            success: false,
            message: "Input Not found",
        });
    }
    try {
        const response = yield app_1.pgclient.query(`SELECT users.name, adress.city
      FROM users 
      JOIN adress  ON users.id = adress.user_id
         WHERE users.email = $1;`, [email]);
        console.log(response);
        if (!response) {
            res.status(403).json({
                success: false,
                message: "SOmething went wrong",
            });
        }
        res.status(200).json({
            success: true,
            user: response.rows[0],
        });
    }
    catch (error) {
        console.error("Signup Error:", error);
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
});
exports.Profile = Profile;
