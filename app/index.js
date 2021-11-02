"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var db = require('./lib/db');
var routers = require('./routers');
var app = (0, express_1.default)();
var port = 3000;
db();
app.use(express_1.default.json());
routers(app);
app.listen(port, function () {
    console.log("Example app listening at http://localhost:" + port);
});
