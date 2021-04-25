import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class SurveyService {
  answer = [];
  constructor(private http: HttpClient) {}
  addUser(product) {
    this.answer.push(product);
  }
  getUsers() {
    return this.answer;
  }
  delete(id: number) {
    this.answer = this.answer.filter(x => x.id !== id);
  }
}
