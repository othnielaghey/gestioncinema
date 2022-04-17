import { Component, OnInit } from '@angular/core';
import { Cinema } from '../common/cinema';
import { Room } from '../common/room';
import { CinemaService } from '../service/cinema.service';
import { CityService } from '../service/city.service';
import { RoomService } from '../service/room.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {
  roomName;
  rooms: Room[]; 
  cities;
  idCity; 
  idCinema; 
  cinemas: Cinema[]
  constructor(public cinemaService: CinemaService,
              public cityService: CityService,
              public roomService: RoomService) { }

  ngOnInit(): void {
    this.findAllCities();
  }

  onSaveRoom(formData) {
     console.log(formData);

     this.roomService.saveRoom(formData).subscribe(
       data => {
         // this.cities = data;
         console.log(data);
         alert('Room has been added succeessfully');
         window.history.back();
         // this.findAllRoomsByCinemaId(cinemaId);
       }, error => {
         console.log(error);
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

  findAllRoomsByCinemaId(cinemaId) {

  }
  onCinemaChange(event) {
    console.log(event.target.value);
    this.idCinema = event.target.value;
  }
}
