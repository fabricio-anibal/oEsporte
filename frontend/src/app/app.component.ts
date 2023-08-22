import { Component } from '@angular/core';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'oEsporte';

  constructor(private router: Router) { }

  redirectToLocais(){
    this.router.navigate(['locais'])
  }

  redirectToEventos(){
    this.router.navigate(['eventos'])
  }

  redirectToHome(){
    this.router.navigate(['home'])
  }
}
