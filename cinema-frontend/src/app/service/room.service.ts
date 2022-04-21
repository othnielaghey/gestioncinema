import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Room } from '../common/room';
import { CinemaService } from './cinema.service';
import { map } from 'rxjs/internal/operators/map';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  roomUrl: string = 'http://localhost:8080/rooms';
  
  cinemaUrl: string = 'http://localhost:8080/cinemas';

  constructor(public http: HttpClient,
              public cinemaService: CinemaService) { }
 
  saveRoom(room: Room) {
    const myRoom = { 
      name: room.name, 
      countSeats: room.countSeats,
      cinema: `${this.cinemaUrl}/${room.cinema}`
    }
    return this.http.post(`${this.roomUrl}`, myRoom);
  }
  saveRoomInCinemaDetail(formData, cinemaId) {
    formData.cinema = {cinema: `${this.cinemaUrl}/${cinemaId}`};

    return this.http.post(`${this.roomUrl}`, formData);
  }

  findAllRooms() {
    return this.http.get<onGetResponseRooms>(this.roomUrl)
    .pipe(
      map(response => response._embedded.rooms)
    );
  }

  findRoomsByCinemaId(id) {
        // let url = 'http://localhost:8080/rooms/search/findByCinemaId?id=1';
    return this.http.get<onGetResponseRooms>(`${this.roomUrl}/search/findByCinemaId?cinemaId=${id}`)
        .pipe(
          map( response=> response._embedded.rooms)
        );
  }

  findRoomsById(id) {
    return this.http.get<Room>(`${this.roomUrl}/${id}`);
  }

  getCountRoom(cinemaId) {
    const url = `${this.roomUrl}/search/countByCinemaId?cinemaId=${cinemaId}`
    return this.http.get(url);
  }
}

interface onGetResponseRooms {
  _embedded: {
    rooms: Room[]
  }
}
