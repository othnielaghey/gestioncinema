import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../common/movie';
import { map } from 'rxjs/operators';
import { Review } from '../common/review';

@Injectable({
  providedIn: 'root'
}) 
export class MovieService {

  constructor(private http: HttpClient) { }
  url: string = 'http://localhost:8080/movies';
  host: string = 'http://localhost:8080/';

  // urlReviews: string = 'http://localhost:8080/reviews';

  saveMovie(movie: Movie) {
    const myMovie = {
      title: movie.title,
      director: movie.director,
      duration: movie.duration,
      releaseDate: movie.releaseDate
    }
    return this.http.post(this.url, myMovie);
  }

  getAllMovies() {
    return this.http.get(`${this.host}movies`);
  } 

  findAllMovies() {
    return this.http.get<getResponseMovies>(this.url).pipe(
      map(response => response._embedded.movies)
    );
  }
  findMovieById(id) {
    return this.http.get<Movie>(`${this.url}/${id}`);
  }

  getMovieDetails(movie) {
    return this.http.get(movie._links.movies.href);
  }

  // findReviewsByMovieId(id: any) {
  //   return this.http.get<getResponseReviews>(`${this.host}/${id}/reviews`).pipe(
  //     map(response => response._embedded.reviews)
  //   )
  // }
  // deleteReview(id) {
  //   const url = `${this.urlReviews}/${id}`;
  //   return this.http.delete(`${url}`);
  // }



  // saveReview(review, id) {
    // let url: string = 'http://localhost:8080/reviews';

    // if (review.id) {
    //   // update

    // } else {
    //   // save
    //   review.movie = `${this.host}/${id}`;
    //   return this.http.post(this.urlReviews, review);
    // }
  //   review.movie = `${this.host}/${id}`;
  //   return this.http.post(this.urlReviews, review);
  // }

  // findReviewById(id: any) {
  //   return this.http.get<Review>(`${this.urlReviews}/${id}`);
  // }
}
interface getResponseMovies {
  _embedded : {
    movies: Movie[]
  }
}

// interface getResponseReviews {
//   _embedded : {
//     reviews: Review[]
//   }
// }
