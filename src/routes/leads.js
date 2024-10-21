"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var dummyData = require('../mockdata/leads.json');
var leadsRouter = express_1.default.Router();
leadsRouter.get('/', function (req, res) {
    res.json(dummyData);
});
exports.default = leadsRouter;
