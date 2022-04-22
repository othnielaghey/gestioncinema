import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Session } from '../common/session';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  url = 'http://localhost:8080/sessions';
  host: string = 'http://localhost:8080/';

  constructor(public http: HttpClient) { }

  saveSession(hourStart) {
    return this.http.post(this.url, hourStart);
  }
  getAllSessions(){
    return this.http.get(`${this.host}sessions`);
  }

  getSessionDetails(session){
    return this.http.get(session._links.sessions.href);
  }

  findAll() {
    return this.http.get<getResponseSessions>(this.url).pipe(
      map(response => response._embedded.sessions)
    );
  }

   deleteSession(id) {
     if (confirm('are you sure ?')) {
       return this.http.delete(`${this.url}/${id}`);
     }
   }

   findSessionById(id) {
     return this.http.get<Session>(`${this.url}/${id}`);
   }

}
interface getResponseSessions {
  _embedded: {
    sessions: Session[];
  }
}
