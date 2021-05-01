import { Component, OnInit } from "@angular/core";
import { Location } from "@angular/common";
@Component({
  selector: "app-survey",
  templateUrl: "./survey.component.html",
  styleUrls: ["./survey.component.css"]
})
export class SurveyComponent implements OnInit {
  order: string;
  sure: boolean;
  constructor(private location: Location) {}

  ngOnInit() {}
  submit() {}
  goBack() {
    if (this.order != "") {
      this.sure = confirm("Are you sure to stop the survey?");
      if (this.sure) {
        this.location.back();
      }
    }
  }
}
