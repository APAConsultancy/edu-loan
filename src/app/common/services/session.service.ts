import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor() { }

  setItem(key: string, value: string) {
    sessionStorage.setItem(key, value);
  }

  getItem(key: string) {
    const value = sessionStorage.getItem(key);
    return value ? value : null;
  }

  removeItem(key: string) {
    sessionStorage.removeItem(key);
  }

  removeAll() {
    sessionStorage.clear();
  }
}
