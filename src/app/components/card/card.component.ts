import { Component, Input, OnInit } from '@angular/core';
import { NetflixService } from 'src/app/netflix.service';
import { Movie } from 'src/app/model/movie';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() film!: Movie

  constructor() { }

  ngOnInit(): void {
  }



}
