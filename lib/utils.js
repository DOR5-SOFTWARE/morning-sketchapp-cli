"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findColors = function (file) {
    var document = file.data('document');
    var colors = [];
    var scan = function (obj) {
        var property;
        if (obj instanceof Object) {
            for (property in obj) {
                if (property === 'name' && obj[property].includes("\/")) {
                    console.log(property + ' : ' + obj[property]);
                    console.log(JSON.stringify(obj, null, 2));
                    continue;
                }
                scan(obj[property]);
            }
        }
    };
    scan(document);
};
