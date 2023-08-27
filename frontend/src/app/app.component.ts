import { Component, inject } from '@angular/core';
import { MatSnackBar, MatSnackBarRef } from '@angular/material/snack-bar';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'oEsporte';

  constructor(private router: Router, private _snackBar: MatSnackBar) { }

  durationInSeconds = 5;

  openSnackBar(mensagem: string) {
    this._snackBar.open(mensagem, 'Fechar', {
      duration: this.durationInSeconds * 1000,
      });
  }

  redirectToLocais(){
    this.router.navigate(['locais'])
  }

  redirectToEventos(){
    this.router.navigate(['eventos'])
  }

  redirectToHome(){
    this.router.navigate(['home'])
  }

  redirectToLogin(){
    this.router.navigate(['login'])
  }

  getLocalStorage(){
    return localStorage
  }

  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['home'])
    this.openSnackBar('Logout realizado com sucesso!')
  }
}