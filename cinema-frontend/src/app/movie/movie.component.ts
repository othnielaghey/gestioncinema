import { Component, OnInit } from '@angular/core';
import { MovieService } from '../service/movie.service';
import { Movie } from '../common/movie';
import { logging } from 'protractor';

@Component({
    selector: 'app-movie',
    templateUrl: './movie.component.html',
    styleUrls: ['./movie.component.css']
  })
  export class MovieComponent implements OnInit {
    title: string;
    director: string;
    duration: string;
    releaseDate: string;
    movies: Movie[];
    movie: Movie;
    constructor(public movieService: MovieService) { }

    ngOnInit(): void {
      this.findAllMovies();
    }

    onSaveMovie(formData) {
      console.log(formData);
 
      this.movieService.saveMovie(formData).subscribe(
        data => {
          // this.movie = data;
          console.log(data);
          alert('Movie has been added succeessfully')
          window.history.back();
          // this.findAllMovies();
        }, error => {
          console.log(error);
        }
      );
    }

    // onSaveMovie(formData) {

    //     if (this.movie == undefined) {
    //       // save
    //       this.movie = formData;
    //     }
    //     console.log(this.movie);

    //     this.moviesService.saveMovie(this.movie).subscribe(
    //       (response)=> {
    //         this.findAllMovies()
    //         console.log(response);
    //       }, error =>{
    //         console.log(error);
    //       }
    //     );

    //     this.title = '';
    //     this.director = '';
    //     this.duration = '';
    //     this.releaseDate = '';
    //     this.movie = undefined;

    //     alert('Movie has been added succeessfully')

    //   }

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

}