import { Component, OnInit } from '@angular/core';
import { ProjectionService } from '../service/projection.service';
import { Projection } from '../common/projection';
import { Cinema } from '../common/cinema';
import { Room } from '../common/room';
import { Session } from '../common/session';
import { Movie } from '../common/movie';
import { CityService } from '../service/city.service';
import { CinemaService } from '../service/cinema.service';
import { RoomService } from '../service/room.service';
import { SessionService } from '../service/session.service';
import { MovieService } from '../service/movie.service';

@Component({
    selector: 'app-projection',
    templateUrl: './projection.component.html',
    styleUrls: ['./projection.component.css']
  })
  export class ProjectionComponent implements OnInit {
      price: string;
      dateProjection: string;
      cinemas: Cinema[];
      cities;
      idCity; 
      idCinema;
      idRoom;
      hourStart;
      idMovie;
      idSession;
      rooms: Room[];
      sessions: Session[];
      session;
      movies: Movie[];
      projections: Projection[]
      constructor(public projectionService: ProjectionService,
        public cityService: CityService,
        public cinemaService: CinemaService,
        public roomService: RoomService,
        public sessionService: SessionService,
        public movieService: MovieService
        ){}

        ngOnInit(): void {
            this.findAllProjections();
        }

        onSaveProjection(formData) {
            console.log(formData);
       
            this.projectionService.saveProjection(formData).subscribe(
              data => {
                // this.movie = data;
                console.log(data);
                alert('Projection has been added succeessfully');
                window.history.back();
                // this.findAllMovies();
              }, error => {
                console.log(error);
              }
            );
        }

        findAllProjections(){
            this.projectionService.findAll().subscribe(
                data => {
                    this.projections = data;
                }, error => {
                    console.log(error);
                }
            )
        }

        onCityChange(event) {
            this.idCity = event.target.value;
            this.cinemaService.findCinemasByCityId(this.idCity).subscribe(
              data => {
                this.cinemas = data;
              }, error => {
                console.log(error);
              }
            );
        }
        
          onCinemaChange(event) {
            console.log(event.target.value);
            this.idCinema = event.target.value;
          }

          onRoomChange(event) {
              console.log(event.target.value);
              this.idRoom = event.target.value;
          }
          onSessionChange(event) {
              console.log(event.target.value);
              this.idSession = event.target.value;
          }

          onMovieChange(event) {
              console.log(event.target.value);
              this.idMovie = event.target.value;
          }

  }