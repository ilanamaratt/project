import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class SalesService {
  sales = [];
  constructor(private http: HttpClient) {}
  addUser(product) {
    this.sales.push(product);
  }
  getUsers() {
    return this.sales;
  }
  delete(id: number) {
    this.sales = this.sales.filter(x => x.id !== id);
  }
}
