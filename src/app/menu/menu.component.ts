import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ShopService } from "../shop.service";
import { product } from "../products";
@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.css"]
})
export class MenuComponent implements OnInit {
  product = product;
  constructor(
    private route: ActivatedRoute,
    private shopService: ShopService
  ) {}

  ngOnInit() {}

  addToShop(product) {
    this.shopService.addToShop(product);
    window.alert("Your product has been added to the shop!");
  }
}
