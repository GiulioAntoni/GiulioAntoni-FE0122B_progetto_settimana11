import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';


@Component({
  selector: 'app-profili',
  templateUrl: './profili.component.html',
  styleUrls: ['./profili.component.scss']
})
export class ProfiliComponent implements OnInit {

  user$ = this.aut.user$

  constructor(private aut: AuthService) { }

  ngOnInit(): void {
console.log(this.user$)
    }



}
