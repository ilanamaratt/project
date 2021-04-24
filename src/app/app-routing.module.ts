import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ContactsComponent } from "./contacts/contacts.component";
import { MenuComponent } from "./menu/menu.component";
import { SaleComponent } from "./sale/sale.component";
import { ShopComponent } from "./shop/shop.component";
import { SurveyComponent } from "./survey/survey.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "home", component: HomeComponent },
  { path: "contacts", component: ContactsComponent },
  { path: "menu", component: MenuComponent },
  { path: "sale", component: SaleComponent },
  { path: "shop", component: ShopComponent },
  { path: "survey", component: SurveyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
