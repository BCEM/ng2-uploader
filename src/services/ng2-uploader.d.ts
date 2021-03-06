/// <reference path="../../typings/index.d.ts" />
import { EventEmitter } from '@angular/core';
export declare class Ng2Uploader {
    url: string;
    cors: boolean;
    withCredentials: boolean;
    multiple: boolean;
    maxUploads: number;
    allowedExtensions: string[];
    maxSize: boolean;
    data: Object;
    noParams: boolean;
    autoUpload: boolean;
    multipart: boolean;
    method: string;
    debug: boolean;
    customHeaders: Object;
    encodeHeaders: boolean;
    authTokenPrefix: string;
    authToken: string;
    fieldName: string;
    _queue: any[];
    _emitter: EventEmitter<any>;
    setOptions(options: any): void;
    uploadFilesInQueue(): void;
    uploadFile(file: any): void;
    addFilesToQueue(files: FileList[]): void;
    removeFileFromQueue(i: number): void;
    clearQueue(): void;
    getQueueSize(): number;
    inQueue(file: any): boolean;
    isFile(file: any): boolean;
    log(msg: any): void;
    generateRandomIndex(): string;
}
