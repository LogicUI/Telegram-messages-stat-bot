"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var jet_logger_1 = __importDefault(require("jet-logger"));
var dotenv = __importStar(require("dotenv"));
var path_1 = __importDefault(require("path"));
dotenv.config({ path: path_1.default.join(__dirname, '../', 'environments', "." + process.env.NODE_ENV + ".env") });
jet_logger_1.default.Err(process.env.NODE_ENV);
jet_logger_1.default.Info(path_1.default.join(__dirname, '../', 'environments', "." + process.env.NODE_ENV + ".env"));
mongoose_1.default
    .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(function () {
    jet_logger_1.default.Info('Connected to db');
})
    .catch(function (error) {
    jet_logger_1.default.Err(error);
});
