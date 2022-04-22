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
    movies;
    movie: Movie;
    currentMovie; 
    constructor(public movieService: MovieService) { }
 
    ngOnInit(): void {
      this.findAllMovies();
      this.movieService.getAllMovies().subscribe(
        (data) => {
          this.movies = data; 
          console.log(data);

        }, (error) => {
          console.log(error);
        }
      );
    }

    onSaveMovie(formData) {
      console.log(formData);
 
      this.movieService.saveMovie(formData).subscribe(
        data => {
          // this.movie = data;
          console.log(data);
          alert('Movie has been added succeessfully')
          window.location.reload();
          // this.findAllMovies();
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

      onGetMovieDetails(movie) {
        this.currentMovie = movie.title;
        this.movieService.getMovieDetails(movie.id).subscribe(
          (data) => {
            this.currentMovie = data;
            console.log(this.currentMovie);
          }, error => {
            console.log(error);
          }
        );
      }
 
}