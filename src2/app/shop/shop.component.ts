import { Component, OnInit } from "@angular/core";
import { ShopService } from "../shop.service";

@Component({
  selector: "app-shop",
  templateUrl: "./shop.component.html",
  styleUrls: ["./shop.component.css"]
})
export class ShopComponent implements OnInit {
  items = this.shopService.getItems();
  empty = this.shopService.isEmpty();
  constructor(private shopService: ShopService) {}

  ngOnInit() {}
  buy(url, name) {
    const l = "https://t.me/share/url?url=" + url + "&text=" + name;
    window.open(l, "_blank");
  }
  delete(id: number) {
    this.shopService.delete(id);
    window.alert("Your product has been deleted!");
    this.items = this.shopService.getItems();
    this.empty = this.shopService.isEmpty();
  }
}
