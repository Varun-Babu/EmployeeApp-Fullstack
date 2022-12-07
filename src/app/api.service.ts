import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TitleStrategy } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  fetchEmployee = () =>{
    return this.http.get("http://localhost:8080/view")
  }
  addEmployee = (dataToSend:any) => {
    return this.http.post("http://localhost:8080/add",dataToSend)
  }
}
