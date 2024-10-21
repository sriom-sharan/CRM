"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var dummyData = require('../mockdata/compaings.json');
var compaingsRouter = express_1.default.Router();
compaingsRouter.get('/', function (req, res) {
    res.json(dummyData);
});
exports.default = compaingsRouter;
