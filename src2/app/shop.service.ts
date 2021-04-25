import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
@Injectable()
export class ShopService {
  items = [];
  ll = Object.keys(this.items).length;
  constructor(private http: HttpClient) {}
  addToShop(product) {
    this.items.push(product);
  }
  isEmpty() {
    console.log();
    if (Object.keys(this.items).length != 0) {
      return false;
    }

    return true;
  }
  getItems() {
    return this.items;
  }
  delete(id: number) {
    this.items = this.items.filter(x => x.id !== id);
  }
}
