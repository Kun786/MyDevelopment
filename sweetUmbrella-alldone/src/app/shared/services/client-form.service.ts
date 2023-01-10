import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientFormService {
  constructor(
    private readonly HttpClient:HttpClient
  ) { }

  submitClientQuery(payLoad:any){
    return this.HttpClient.post('/emailManagement/sendEmail',payLoad);
  }
}
