import * as sketchFile from 'sketch-file';
import * as fs from 'fs';
import * as path from 'path';
import FileFormat from '@sketch-hq/sketch-file-format';


export class SketchFile {
    private path: string;
    private file?: any | null = null;
    private initialized: Promise<boolean>;

    get ready(): Promise<boolean> {
        return this.initialized;
    }

    constructor(filePath: string) {
        this.path = filePath;

        this.initialized = new Promise<boolean>(
            (resolve, reject) => {
                console.log(filePath);
                sketchFile.readSketchFile(filePath).then(
                    file => {
                        this.file = file;
                        resolve(true)
                    }
                ).catch(reject);
            }
        );
    }

    data(property: string) {
        if (this.file) {
            return this.file[property];
        }
    }

    printMetaData() {
        this.printDataToFile('meta-data', this.data('meta'));
    }

    printDocument() {
        this.printDataToFile('document', this.data('document'));
    }

    printUser() {
        this.printDataToFile('user', this.data('user'));
    }

    printPages() {
        this.printDataToFile('pages', this.data('pages'));
    }

    printImages() {
        this.printDataToFile('images', this.data('images'));
    }

    printAll() {
        this.printDocument();
        this.printMetaData();
        this.printUser();
        this.printPages();
        this.printUser();
    }

    printDataToFile(dataPrefix: string, data: any) {
        const fileName = path.basename(this.path, '.sketch');
        const outputFilePath = path.join(path.dirname(this.path), dataPrefix + '-' + fileName + '.json');
        const output = fs.openSync(outputFilePath, 'w+');

        fs.appendFile(
            output,
            JSON.stringify(data, null, 2),
            'utf8',
            (err) => {
                if (err) throw err;
                console.log('The ' + dataPrefix + ' was written to file: ' + path.basename(outputFilePath));
            }
        );
    }
}
