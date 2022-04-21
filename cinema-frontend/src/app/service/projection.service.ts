import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Projection } from '../common/projection';
import { RoomService } from './room.service';
import { SessionService } from './session.service';
import { MovieService } from './movie.service';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
  }) 
export class ProjectionService {
    url: string = `http://localhost:8080/projectionMovies`;

    roomUrl: string = 'http://localhost:8080/rooms';
    sessionUrl: string = 'http://localhost:8080/sessions';
    movieUrl: string = 'http://localhost:8080/movies';
  
    constructor(public http: HttpClient, 
      public rommService: RoomService,
      public sessionService: SessionService,
      public movieService: MovieService) { }

    saveProjection(projection: Projection) {
        const myProjection = {
          dateProjection: projection.dateProjection,
          price: projection.price,
          room:`${this.roomUrl}/${projection.room}`,
          session:`${this.sessionUrl}/${projection.session}`,
          movie: `${this.movieUrl}/${projection.movie}`
        }
        return this.http.post(this.url, myProjection);

        //voir SaveRoom
    }

    findAll() {
        return this.http.get<getResponceProjections>(this.url)
        .pipe(
          map(response => response._embedded.projections)
        );
    }

}

interface getResponceProjections {
  _embedded: {
    projections: Projection[];
  }
}