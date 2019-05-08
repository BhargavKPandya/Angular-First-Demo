import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  firstClick() {
    return console.log("FirstClick method called from data.service");
  }

  getUsers(){
    return this.http.get('https://reqres.in/api/users');
  }
}
