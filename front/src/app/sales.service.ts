import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Sales } from "./sales";

@Injectable()
export class SalesService {
  constructor(private http: HttpClient) {}

  getSales(): Observable<Sales[]> {
    return this.http.get<Sales[]>("http://127.0.0.1:8000/api/sale");
  }
}
