import { Injectable, ErrorHandler } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GlobalErrorHandlerService implements ErrorHandler {

constructor() { }
  handleError(error: any): void {

    console.log('An error was handled.');

    if (environment.production === false) {
      throw error;
    }
  }

}
