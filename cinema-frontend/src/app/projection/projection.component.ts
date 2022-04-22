import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectionService } from '../service/projection.service';
import { Projection } from '../common/projection';
import { City } from '../common/city';
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
      price: number;
      dateProjection: string;
      projections: Projection[]
      projection: Projection;

      cinemaId;
      cinemas: Cinema[];
      cinema: Cinema;
      
      cityId;
      city: City;
      cities: City[];

      roomId;
      rooms: Room[];
      room: Room;

      sessionId;
      sessions: Session[];
      session: Session;

      movieId;
      movies: Movie[];
      movie: Movie;
      constructor(public projectionService: ProjectionService,
        public cityService: CityService,
        public cinemaService: CinemaService,
        public roomService: RoomService,
        public sessionService: SessionService,
        public movieService: MovieService,

        private router: Router
        ){}

        ngOnInit(): void {
            this.findAllCities();
            this.findAllSessions();
            this.findAllMovies();
            this.findAllRooms();
        }

        onSaveProjection(formData) {
            console.log(formData);
       
            this.projectionService.saveProjection(formData).subscribe(
              data => {
                // this.movie = data;
                console.log(data);
                alert('Projection has been added succeessfully');                
                  this.router.navigate(['cinemas']);
                      }, error => {
                console.log(error); 
                alert(error);
              }
            );
        }
        findAllCities() {
          this.cityService.findAll().subscribe(
            data => {
              this.cities = data;
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

        findAllRooms() {
          this.roomService.findAllRooms().subscribe(
            data => {
              this.rooms = data;
            }, error => {
              console.log(error);
            }
          );
        }

        findAllMovies() {
          this.movieService.findAllMovies().subscribe(
            data => {
              this.movies = data;
              // console.log(this.cities);
  
            }, error => {
              console.log(error);
            }
          )
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
            console.log(event.target.value);
            this.cityId = event.target.value;
            this.cinemaService.findCinemasByCityId(this.cityId).subscribe(
              data => {
                this.cinemas = data;
              }, error => {
                console.log(error);
              }
            );

            // this.cinemaId = event.target.value;

            // this.roomService.findRoomsByCinemaId(this.cinemaId).subscribe(
              
            //   data0 => {
            //     console.log(data0);
            //     alert('its working');

            //     this.rooms = data0;
            //   }, error => {
            //     // console.log(error);
            //     alert('data0');
            //   }
            // );
        }
        
           onCinemaChange(event) {
             console.log(event.target.value);
             this.cinemaId = event.target.value;
             alert('its working');

             this.roomService.findRoomsByCinemaId(this.cinemaId).subscribe(
                data => {
                  console.log(data);
                  this.rooms = data;
                }, error => {
                  console.log(error);
                }
              );
           }
 
          onRoomChange(event) {
              console.log(event.target.value);
              this.roomId = event.target.value;
          }

          onSessionChange(event) {
              console.log(event.target.value);
              this.sessionId = event.target.value;
          }

          onMovieChange(event) {
              console.log(event.target.value);
              this.movieId = event.target.value;
          }

  }