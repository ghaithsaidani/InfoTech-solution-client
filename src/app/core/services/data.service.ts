import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private _isAdmin!: boolean
  private _isAgent!: boolean
  private _isServiceEtranger!: boolean
  constructor() { }

  get isServiceEtranger(): boolean {
    return this._isServiceEtranger;
  }

  set isServiceEtranger(value: boolean) {
    this._isServiceEtranger = value;
  }
  get isAgent(): boolean {
    return this._isAgent;
  }

  set isAgent(value: boolean) {
    this._isAgent = value;
  }
  get isAdmin(): boolean {
    return this._isAdmin;
  }

  set isAdmin(value: boolean) {
    this._isAdmin = value;
  }


}
