import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";
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
import { LoginComponent } from './login/login.component';
import { LoginService } from './login.service';
import { SurveyService } from './survey.service';
import { SalesService } from './sales.service';

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
    HomeComponent,
    ContactsComponent,
    MenuComponent,
    SaleComponent,
    TopBarComponent,
    ShopComponent,
    SurveyComponent,
    LoginComponent
  ],
  bootstrap: [AppComponent],
  providers: [ShopService, LoginService, SurveyService, SalesService]
})
export class AppModule {}
