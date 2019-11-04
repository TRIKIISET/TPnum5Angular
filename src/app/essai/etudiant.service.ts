import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {
  etudiants= ['Amir', 'Mouna', 'Mounir'];
  constructor() { }
  ajouterEtudiant(nom:string)
  {
    this.etudiants.push(nom);
  }
}
