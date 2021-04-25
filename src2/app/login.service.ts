import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class LoginService {
  login = [];
  constructor(private http: HttpClient) {}
  addUser(product) {
    this.login.push(product);
  }
  signin(login) {}
  getUsers() {
    return this.login;
  }
  delete(id: number) {
    this.login = this.login.filter(x => x.id !== id);
  }
}
