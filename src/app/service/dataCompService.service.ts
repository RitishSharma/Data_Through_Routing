import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Router } from '@angular/router';

const phoneUrl = 'https://harshveersingh.github.io/ia/phones.json';
const laptopUrl = 'https://harshveersingh.github.io/ia/laptops.json';


@Injectable({
    providedIn: 'root'
})
export class DataComponentService{
    constructor(private httpClient: HttpClient) {}

    getPhoneData() {
        return this.httpClient.get<any>(phoneUrl)
        .pipe(
            catchError(this.handleError)
        );
    }

    getLaptopData() {
        return this.httpClient.get<any>(laptopUrl)
        .pipe(
            catchError(this.handleError)
     );

    }
    handleError(error: HttpErrorResponse) {
        return throwError(error);
      }
}
        
    