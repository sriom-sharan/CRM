"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var cors_1 = require("cors");
var helmet_1 = require("helmet");
var compaign_1 = require("./routes/compaign");
var leads_1 = require("./routes/leads");
var app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use((0, helmet_1.default)());
app.use('/api/leads', leads_1.default);
app.use('/api/compaigns', compaign_1.default);
app.listen(8000, function () {
    console.log('Server running at localhost:8000');
});
