import { Component, ViewEncapsulation } from '@angular/core';
import { HttpClientService } from '../http/httpClientService';
import { Injectable } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
@Injectable({
  providedIn: 'root'
})
export class LoginComponent {
  constructor(private httpClient: HttpClientService, private router: Router,  private _snackBar: MatSnackBar) { }

  hide_login = true;
  hide_signup = true;

  usernameLogin = ""
  passwordLogin = ""

  usernameSignup = ""
  passwordSignup = ""
  confirmPasswordSignup = ""
  emailSignup = ""

  usernameLoginHintMessage = ""
  passwordLoginHintMessage = ""

  usernameSignupHintMessage = ""
  passwordSignupHintMessage = ""
  confirmPasswordSignupHintMessage = ""
  emailSignupHintMessage = ""

  loginLoading = false
  signupLoading = false

  durationInSeconds = 5;

  ngOnInit() {
    if(localStorage.getItem('token')){
      console.log("Log out realizado!")
      localStorage.removeItem('token');
    }
    
  }

  openSnackBar(mensagem: string) {
    this._snackBar.open(mensagem, 'Fechar', {
      duration: this.durationInSeconds * 1000,
      });
  }

  async validLoginFields(){
    if(this.usernameLogin == ""){
      this.usernameLoginHintMessage = "Campo obrigatório"
    }
    else{
      this.usernameLoginHintMessage = ""
    }

    if(this.passwordLogin == ""){
      this.passwordLoginHintMessage = "Campo obrigatório"
    }
    else{
      this.passwordLoginHintMessage = ""
    }
    this.loginLoading = true
    await this.httpClient.post<any>('http://localhost:3000/api/auth/login', {}, {
      username: this.usernameLogin,
      password: this.passwordLogin
    }).subscribe((data: { token: string; }) => {
      console.log(data)
      localStorage.setItem('token', data.token);
      this.openSnackBar('Login realizado com sucesso!')
      this.loginLoading = false
      this.router.navigate(['home'])
    }
    );

    
  }

  async validSignupFields(){
    if(this.usernameSignup == ""){
      this.usernameSignupHintMessage = "Campo obrigatório"
    }
    else{
      this.usernameSignupHintMessage = ""
    }

    if(this.passwordSignup == ""){
      this.passwordSignupHintMessage = "Campo obrigatório"
    }
    else{
      this.passwordSignupHintMessage = ""
    }

    if(this.confirmPasswordSignup == ""){
      this.confirmPasswordSignupHintMessage = "Campo obrigatório"
    }
    else{
      this.confirmPasswordSignupHintMessage = ""
    }

    if(this.emailSignup == ""){
      this.emailSignupHintMessage = "Campo obrigatório"
    }
    else{
      this.emailSignupHintMessage = ""
    }
    this.signupLoading = true
    await this.httpClient.post<any>('http://localhost:3000/api/auth/register', {}, {
      username: this.usernameSignup,
      password: this.passwordSignup,
      confirmPassword: this.confirmPasswordSignup,
      email: this.emailSignup
    }).subscribe(async () => {
      await this.httpClient.post<any>('http://localhost:3000/api/auth/login', {}, {
        username: this.usernameSignup,
        password: this.passwordSignup
      }).subscribe((data: { token: string; }) => {
        localStorage.setItem('token', data.token);
        this.openSnackBar('Login realizado com sucesso!')
        this.signupLoading = false
        this.router.navigate(['home'])
      }
      );

      
    }
    );

    

  }

}
