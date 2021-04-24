import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { HomeComponent } from "./home/home.component";
import { ContactsComponent } from "./contacts/contacts.component";
import { MenuComponent } from "./menu/menu.component";
import { SaleComponent } from "./sale/sale.component";
import { AppRoutingModule } from "./app-routing.module";
import { TopBarComponent } from "./top-bar/top-bar.component";
import { ShopService } from "./shop.service";
import { ShopComponent } from "./shop/shop.component";
import { RouterModule } from "@angular/router";
import { SurveyComponent } from "./survey/survey.component";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    HomeComponent,
    ContactsComponent,
    MenuComponent,
    SaleComponent,
    TopBarComponent,
    ShopComponent,
    SurveyComponent
  ],
  bootstrap: [AppComponent],
  providers: [ShopService]
})
export class AppModule {}
