import { ILogger } from './ILogger';
import { DatePipe } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })

export class Logger implements ILogger {

    constructor(private datePipe: DatePipe) {}

    logDebug: (msg: string) => void = (msg) => this.log('Debug', msg);
    logInfo: (msg: string) => void = (msg) => this.log('Info', msg);
    logWarning: (msg: string) => void = (msg) => this.log('Warning', msg);
    logError: (msg: string) => void = (msg) => this.log('Error', msg);

    private log(level: string, msg: string): void {
        const date = this.datePipe.transform(Date.now(), 'dd-MM-yyyy');
        console.log(`${date} - ${level}: ${msg}`);
    }
}
