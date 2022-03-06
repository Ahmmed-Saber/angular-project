import { Injectable } from '@angular/core';
//import {httpclie}
import { HttpClient } from '@angular/common/http';
import { IUser } from '../sharedclassesandtypes/users'; 
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsersserviceService {

  constructor(private http:HttpClient) { }
  private _Url: string = 'https://jsonplaceholder.typicode.com/users'
  getUsers():Observable<IUser[]>
  {
    return this.http.get<IUser[]>(this._Url)
  }


}
