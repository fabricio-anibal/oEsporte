import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EventoComponent } from './evento/evento.component';
import { LocalComponent } from './local/local.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import {MatListModule} from '@angular/material/list';
import { FormsModule } from '@angular/forms';
import {MatGridListModule} from '@angular/material/grid-list';
import { LoginComponent } from './login/login.component';
import { CreateLocalComponent } from './local/create-local/create-local.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EventoComponent,
    LocalComponent,
    LoginComponent,
    CreateLocalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    FormsModule,
    MatGridListModule,
    MatTabsModule,
    MatInputModule,
    MatFormFieldModule,
    HttpClientModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    RouterModule.forRoot([
      //{path: 'eventos', component: EventoComponent},
      {path: 'locais', component: LocalComponent},
      {path: 'home', component: HomeComponent},
      {path: 'login', component: LoginComponent},
      {path: 'createLocal', component: CreateLocalComponent},
      {path: '', redirectTo: '/home', pathMatch: 'prefix'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
