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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.disableUser = exports.removeUser = exports.updateUser = exports.addNewUser = exports.findUsers = void 0;
const user_1 = __importDefault(require("../models/user"));
const enums_1 = require("../enums");
const findUsers = (param, id) => __awaiter(void 0, void 0, void 0, function* () {
    return (param === enums_1.SearchType.All)
        ? yield user_1.default.findAll()
        : yield user_1.default.findByPk(id);
});
exports.findUsers = findUsers;
const addNewUser = (user) => __awaiter(void 0, void 0, void 0, function* () {
    const emailExist = yield user_1.default.findOne({
        where: { email: user.email }
    });
    if (emailExist)
        return;
    return user_1.default.create(user);
    /*

        const { id, ...data } = user

    const [ _, created] = await User.findOrCreate ({
        where: { id }
     })
    
    return created

    const user = new User( user );
    return await user.save();
    */
});
exports.addNewUser = addNewUser;
const updateUser = (_a) => __awaiter(void 0, void 0, void 0, function* () {
    var { id } = _a, data = __rest(_a, ["id"]);
    const userExist = yield user_1.default.findByPk(id);
    if (!userExist)
        return;
    return yield userExist.update(data);
});
exports.updateUser = updateUser;
const removeUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const userExist = yield user_1.default.findByPk(id);
    if (!userExist)
        return;
    return yield user_1.default.destroy({
        where: { id }
    });
});
exports.removeUser = removeUser;
const disableUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const userExist = yield user_1.default.findByPk(id);
    if (!userExist)
        return;
    return yield userExist.update({
        state: false
    });
});
exports.disableUser = disableUser;
//# sourceMappingURL=users.services.js.map