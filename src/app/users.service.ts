import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import {ReactiveFormsModule}

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private client: HttpClient) { }

  firstClick(){
    return console.log('Hello from Service click!!!');
  }

  getUsers(){
    const apiURL = 'https://reqres.in/api/users';
    return this.client.get(apiURL);
  }
}
