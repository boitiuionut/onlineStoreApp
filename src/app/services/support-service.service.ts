import { CustomerMessage } from './../models/customer-message';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { customerMsgUrl } from 'src/config/api';

@Injectable({
  providedIn: 'root'
})

export class SupportServiceService {

  constructor(private http: HttpClient) { }

  addCustomerMessage(message: CustomerMessage): Observable<any>{
    console.log(message)
    return this.http.post(customerMsgUrl, { message });
  }
}
