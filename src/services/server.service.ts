import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
// import { Observable } from "rxjs/";
@Injectable({
  providedIn: "root"
})
export class ServerService {
  configUrl = "https://www.google.com";

  getAllContacts() {
    return this.http.get("http://www.google.com");
  }

  constructor(private http: HttpClient) {}

}
