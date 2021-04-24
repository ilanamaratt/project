import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
@Injectable()
export class ShopService {
  items = [];
  constructor(private http: HttpClient) {}
  addToShop(product) {
    this.items.push(product);
  }
  getItems() {
    return this.items;
  }
  delete(id: number) {
    this.items = this.items.filter(x => x.id !== id);
  }
}
