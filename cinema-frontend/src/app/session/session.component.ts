import { Component, OnInit } from '@angular/core';
import { SessionService } from '../service/session.service';
import { Session } from '../common/session';
import { logging } from 'protractor';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.css']
})
export class SessionComponent implements OnInit {
    hourStart;
    sessions: Session[];

    constructor(public sessionService: SessionService) { }

    ngOnInit(): void {
        this.findAllSessions();
    }

    onSaveSession(formData) {
        console.log(formData);
   
        this.sessionService.saveSession(formData).subscribe(
          data => {
            // this.movie = data;
            console.log(data);
            alert('Session has been added succeessfully');
            window.history.back();
            // this.findAllMovies();
          }, error => {
            console.log(error);
          }
        );
    }
    
    findAllSessions() {
        this.sessionService.findAll().subscribe(
          data => {
            this.sessions = data;
            // console.log(this.cities);

          }, error => {
            console.log(error);
          }
        )
      }

}