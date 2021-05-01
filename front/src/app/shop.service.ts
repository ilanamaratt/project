import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Products } from "./product";
import { Observable } from "rxjs";
@Injectable()
export class ShopService {
  items = [];
  ll = Object.keys(this.items).length;
  constructor(private http: HttpClient) {}
  addToShop(product :Products) {
    return this.http.post<Products>("http://127.0.0.1:8000/api/menu/", product);
  }
  isEmpty() {
    console.log();
    if (Object.keys(this.items).length != 0) {
      return false;
    }

    return true;
  }
  getItems(): Observable<Products[]> {
    return this.http.get<Products[]>("http://127.0.0.1:8000/api/shop/");
  }
  delete(id: number) {
    return this.http.delete<Products>(`http://127.0.0.1:8000/api/basket/cars/${id}/`)
  }
}
