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
exports.signUp = void 0;
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
