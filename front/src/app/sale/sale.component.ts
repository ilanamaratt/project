import { Component, OnInit } from "@angular/core";
import { Sales } from "../sales";
import { SalesService } from "../sales.service";

@Component({
  selector: "app-sale",
  templateUrl: "./sale.component.html",
  styleUrls: ["./sale.component.css"]
})
export class SaleComponent implements OnInit {
  txt = "";
  sales:Sales[]
  constructor(private saleService: SalesService) {}

  ngOnInit() {}
  getSale() {
    this.txt = "Hello! I would like to get your special offer!";
    const l = "https://wa.me/" + 77071771541 + "?text=" + this.txt;
    window.open(l, "_blank");
  }
  getSalesList(): void {
    this.saleService.getSales().subscribe( sale => this.sales = sale)
  }
}
