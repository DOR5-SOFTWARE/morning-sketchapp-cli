#!/usr/bin/env node
'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var chalk_1 = __importDefault(require("chalk"));
var clear_1 = __importDefault(require("clear"));
var figlet_1 = __importDefault(require("figlet"));
var inquirer_1 = __importDefault(require("inquirer"));
var sketch_file_1 = require("./sketch-file");
var utils = __importStar(require("./utils"));
clear_1.default();
console.log(chalk_1.default.white(figlet_1.default.textSync('morning sketchapp test cli', { horizontalLayout: 'default' })));
console.log('\n \nexecution path is: ' + process.cwd());
var questions = [{
        type: 'input',
        name: 'file',
        message: 'Wjich file to process?'
    }];
inquirer_1.default.prompt(questions)
    .then(function (answers) {
    console.log('file-path is ' + answers.file);
    var file = new sketch_file_1.SketchFile(answers.file);
    file.ready.then(function () {
        //file.printAll();
        utils.findColors(file);
        return 0;
    });
});
