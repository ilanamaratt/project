import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-sale",
  templateUrl: "./sale.component.html",
  styleUrls: ["./sale.component.css"]
})
export class SaleComponent implements OnInit {
  txt = "";
  constructor() {}

  ngOnInit() {}
  getSale() {
    this.txt = "Hello! I would like to get your special offer!";
    const l = "https://wa.me/" + 77071771541 + "?text=" + this.txt;
    window.open(l, "_blank");
  }
}
