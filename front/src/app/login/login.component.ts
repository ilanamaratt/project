import { Component, OnInit } from "@angular/core";
import { Location } from "@angular/common";
import { LoginService } from "../login.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  name: string;
  psw: string;
  sure: boolean;
  rgtr: boolean;
  constructor(private location: Location, private loginService: LoginService) {}

  ngOnInit() {}
  goBack() {
    if (this.name != "") {
      this.sure = confirm("Are you sure to stop the sign in form?");
      if (this.sure) {
        this.location.back();
      }
      this.rgtr = false;
    }
  }
  register() {
    this.rgtr = true;
  }
  submit() {}

  addUser() {
    if (this.name == "" || this.psw == "") {
      window.alert("Please fill all the required fields!");
    } else {
      this.loginService.addUser(name);
      window.alert("New user was created!");
      this.rgtr = false;
    }
  }
}
