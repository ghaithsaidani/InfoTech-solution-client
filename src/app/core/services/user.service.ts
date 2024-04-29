import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../../public/shared/models/user.model";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {UserDtos} from "../../public/shared/dto/user.dto";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http :HttpClient) { }
  prefix = 'users';

  createUser(data: User): Observable<User>{
    return this.http.post(`${environment.baseUrl}/${this.prefix}`, data) as Observable<User>;
  }

  getUsers(): Observable<UserDtos> {
    return this.http.get(`${environment.baseUrl}/${this.prefix}`) as Observable<UserDtos>;
  }

  getUserById(id: number):Observable<User>{
    return this.http.get(`${environment.baseUrl}/${this.prefix}/${id}`) as Observable<User>;
  }

  UpdateUser(data: User):Observable<User> {
    return this.http.put(`${environment.baseUrl}/${this.prefix}/${data.id}`, data) as Observable<User>;
  }

  DeletUser(id: number) {
    return this.http.delete(`${environment.baseUrl}/${this.prefix}/${id}`)
  }

  /*SearchUsers(query:any):Observable<User[]> {
    return this.http.get(`${environment.baseUrl}/${this.prefix}/search/${query}`) as Observable<User[]>;
  }

  SearchUsersByOffice(query:any,bureauId:any):Observable<User[]> {
    return this.http.post(`${environment.baseUrl}/${this.prefix}/search-by-bureau/${query}`,bureauId)  as Observable<User[]>;
  }*/
}
