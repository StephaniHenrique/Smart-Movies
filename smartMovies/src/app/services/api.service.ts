import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})


export class ApiService {

  private baseURL: string = "https://api.themoviedb.org/3/";

  constructor(private httpClient: HttpClient) { }

  public getDiscoverTV() {
    return this.getMovie("discover/tv");
  }

  public getSerieDetail(idSerie: string) {
    return this.getMovie("tv/" + idSerie);
  }

  public getSerieSimilar(idSerie: string) {
    return this.getMovie("tv/" + idSerie + "/similar");
  }

  public getDiscoverMovie() {
    return this.getMovie("discover/movie");
  }

  public getMovieDetail(idMovie: string) {
    return this.getMovie("movie/" + idMovie);
  }

  public getMovieSimilar(idMovie: string) {
    return this.getMovie("movie/" + idMovie + "/similar");
  }

  public getMovie(url: string) {
    return this.httpClient.get(this.baseURL + url + this.getApiKey() + '&language=pt-BR');
  }

  private getApiKey(): string {
    return "?api_key=5a1b03c7e23d67763da5c02b63d3e007";
  }

}



