import { Injectable } from '@angular/core';
import {User} from "../../public/shared/models/user.model";
import {CookieService} from "ngx-cookie-service";

const USER="user"
@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private cookieService:CookieService) { }

  clean(){
    this.cookieService.deleteAll('/')
  }

  deleteUser(){
    this.cookieService.delete(USER,'../')
  }
  public saveUser(user:User): void {
    this.cookieService.set(USER, JSON.stringify(user));
  }


  public getUser():User{
    const user=this.cookieService.get(USER)
    return user ? JSON.parse(user) as User : new User()
  }

  public isLoggedIn(): boolean {
    const user= this.cookieService.get(USER)
    return !!user
  }
}
