"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.disableUser = exports.deleteUser = exports.putUser = exports.postUser = exports.getUser = exports.getUsers = void 0;
const usersService = __importStar(require("../services/users.services"));
const enums_1 = require("../enums");
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield usersService.findUsers(enums_1.SearchType['All']);
    (users !== undefined)
        ? res.json({ users })
        : res.status(404).json({
            msg: "No users found!"
        });
});
exports.getUsers = getUsers;
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const user = yield usersService.findUsers(enums_1.SearchType['One'], +id);
    (user !== undefined)
        ? res.json({ user })
        : res.status(404).json({
            msg: `No user found with id: ${id}!`
        });
});
exports.getUser = getUser;
const postUser = ({ body }, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const postUser = yield usersService.addNewUser(body);
        (postUser)
            ? res.status(201).json(postUser)
            : res.status(401).json({
                msg: "User already exist!"
            });
    }
    catch (error) {
        console.log(error);
        res.json({
            msg: "Admin!"
        });
    }
});
exports.postUser = postUser;
const putUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        req.body.id = req.params.id;
        const userData = req.body;
        const user = yield usersService.updateUser(userData);
        (user)
            ? res.status(200).json(user)
            : res.status(401).json({
                msg: `User not found!`
            });
    }
    catch (error) {
        console.log(error);
        res.json({
            msg: "Admin!",
            error
        });
    }
});
exports.putUser = putUser;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const user = yield usersService.removeUser(+id);
        (user)
            ? res.status(200).json(user)
            : res.status(404).json({
                msg: `User not found!`
            });
    }
    catch (error) {
        console.log(error);
        res.json({
            msg: "Admin!",
            error
        });
    }
});
exports.deleteUser = deleteUser;
const disableUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const user = yield usersService.disableUser(+id);
        (user)
            ? res.status(200).json(user)
            : res.status(404).json({
                msg: `User not found!`
            });
    }
    catch (error) {
        console.log(error);
        res.json({
            msg: "Admin!",
            error
        });
    }
});
exports.disableUser = disableUser;
//# sourceMappingURL=users.js.map