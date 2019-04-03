import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {catchError, tap} from "rxjs/operators";

@Injectable()
export class MyServiceService {

  constructor(private http : HttpClient) { }
  public submitCommand(command:String):Observable<{response: String}>{
    // @ts-ignore
    return this.http.get<String>(`http://localhost:8080/api/student/initializeIMS/`+command,
      { observe: 'response' });
  }
  public submitCommandDB2(command:String):Observable<{response: String}>{
    // @ts-ignore
    return this.http.get<String>(`http://localhost:8080/api/student/initializeDB2/`+command,
      { observe: 'response' });
  }
  public submitCommandFTP(command:String):Observable<{response: String}>{
    // @ts-ignore
    return this.http.get<String>(`http://localhost:8080/api/student/initializeFTP/`+command,
      { observe: 'response' });
  }
}
