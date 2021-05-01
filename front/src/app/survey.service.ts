import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Survey } from "./survey";

@Injectable()
export class SurveyService {
  answer = [];
  constructor(private http: HttpClient) {}
  submit(survey: Survey) {
    return this.http.post<Survey>("http://127.0.0.1:8000/api/survey/", survey);
  }

}
