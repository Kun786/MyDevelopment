import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientFormService {
  private baseUrl: string | any = environment.baseUrl;
  constructor(
    private readonly HttpClient:HttpClient
  ) { }

  submitClientQuery(payLoad:any){
    console.log(payLoad)
    console.log(this.baseUrl)
    return this.HttpClient.post(`${this.baseUrl}/emailManagement/sendEmail`,payLoad);
  }
}
