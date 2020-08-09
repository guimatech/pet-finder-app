import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavbarComponent } from './navbar/navbar.component'
import { PetsComponent } from './pets/pets.component'
import { PetDetailComponent } from './pets/pet-detail/pet-detail.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PetsComponent,
    PetDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
