"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var sketchFile = __importStar(require("sketch-file"));
var fs = __importStar(require("fs"));
var path = __importStar(require("path"));
var SketchFile = /** @class */ (function () {
    function SketchFile(filePath) {
        var _this = this;
        this.file = null;
        this.path = filePath;
        this.initialized = new Promise(function (resolve, reject) {
            console.log(filePath);
            sketchFile.readSketchFile(filePath).then(function (file) {
                _this.file = file;
                resolve(true);
            }).catch(reject);
        });
    }
    Object.defineProperty(SketchFile.prototype, "ready", {
        get: function () {
            return this.initialized;
        },
        enumerable: true,
        configurable: true
    });
    SketchFile.prototype.data = function (property) {
        if (this.file) {
            return this.file[property];
        }
    };
    SketchFile.prototype.printMetaData = function () {
        this.printDataToFile('meta-data', this.data('meta'));
    };
    SketchFile.prototype.printDocument = function () {
        this.printDataToFile('document', this.data('document'));
    };
    SketchFile.prototype.printUser = function () {
        this.printDataToFile('user', this.data('user'));
    };
    SketchFile.prototype.printPages = function () {
        this.printDataToFile('pages', this.data('pages'));
    };
    SketchFile.prototype.printImages = function () {
        this.printDataToFile('images', this.data('images'));
    };
    SketchFile.prototype.printAll = function () {
        this.printDocument();
        this.printMetaData();
        this.printUser();
        this.printPages();
        this.printUser();
    };
    SketchFile.prototype.printDataToFile = function (dataPrefix, data) {
        var fileName = path.basename(this.path, '.sketch');
        var outputFilePath = path.join(path.dirname(this.path), dataPrefix + '-' + fileName + '.json');
        var output = fs.openSync(outputFilePath, 'w+');
        fs.appendFile(output, JSON.stringify(data, null, 2), 'utf8', function (err) {
            if (err)
                throw err;
            console.log('The ' + dataPrefix + ' was written to file: ' + path.basename(outputFilePath));
        });
    };
    return SketchFile;
}());
exports.SketchFile = SketchFile;
