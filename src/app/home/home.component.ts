import { Component } from '@angular/core';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private router: Router) { }

  redirectToLocais(){
    this.router.navigate(['locais'])
  }

  redirectToEventos(){
    this.router.navigate(['eventos'])
  }
}
