import * as sketchFile from 'sketch-file';
import * as fs from 'fs';
import * as path from 'path';
import FileFormat from '@sketch-hq/sketch-file-format';
import { SketchFile } from './sketch-file';

export const findColors = (file: SketchFile) => {

    const document = file.data('document');
    const colors = [];

    const scan = (obj: any) => {
        let property;

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

}
