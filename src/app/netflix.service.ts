import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from './model/movie';



@Injectable({
  providedIn: 'root'
})
export class NetflixService {
  urlMovie = 'http://localhost:4201'

  constructor(private http : HttpClient) { }
  mostra(){
    return this.http.get<Movie[]>(`${this.urlMovie}/movies-popular`)
  }

  ottieni(){
    return localStorage.getItem('user')
  }
}
