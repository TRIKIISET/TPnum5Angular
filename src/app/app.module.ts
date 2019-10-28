import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { LivreComponent } from './ex2/livre/livre.component';
import { ListLivresComponent } from './ex2/list-livres/list-livres.component';
import { PrincipalComponent } from './application/principal/principal.component';
import { ListEmployesComponent } from './ex1/list-employes/list-employes.component';
import { AddEmployeComponent } from './ex1/add-employe/add-employe.component';
import { FirstComponent } from './application/first/first.component';
import { SecondComponent } from './application/second/second.component';
import { EssaiComponent } from './essai/essai.component';




@NgModule({
  declarations: [
    AppComponent,
    LivreComponent,
    ListLivresComponent,
    PrincipalComponent,
    ListEmployesComponent,
    AddEmployeComponent,
    FirstComponent,
    SecondComponent,
    EssaiComponent    
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
