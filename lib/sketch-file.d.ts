export declare class SketchFile {
    private path;
    private file?;
    private initialized;
    get ready(): Promise<boolean>;
    constructor(filePath: string);
    data(property: string): any;
    printMetaData(): void;
    printDocument(): void;
    printUser(): void;
    printPages(): void;
    printImages(): void;
    printAll(): void;
    printDataToFile(dataPrefix: string, data: any): void;
}
