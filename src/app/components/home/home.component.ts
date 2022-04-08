import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/model/movie';
import { NetflixService } from 'src/app/netflix.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  arrMovie!: Movie[];
  film!: any;


  constructor(private srvNet: NetflixService) { }

  async ngOnInit() {

    this.film = await this.srvNet.mostra().toPromise();
    this.arrMovie = this.film
    console.log(this.arrMovie)
  }

}
