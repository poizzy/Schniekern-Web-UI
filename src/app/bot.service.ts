import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, tap } from "rxjs";
import { Bot } from "./api";

@Injectable({
  providedIn: 'root'
})
export class BotService { 

  constructor(private http : HttpClient) { }

  apiurl = "http://localhost:8080/players"

  getPlayer(): Observable<Bot[]> {

    return this.http.get<Bot[]>(this.apiurl).pipe(
      tap(_=> console.log("hallo"))
    ) 
  }
}