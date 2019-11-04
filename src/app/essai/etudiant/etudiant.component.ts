import { Component, OnInit } from '@angular/core';
import { EtudiantService } from '../etudiant.service';

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styles: []
})
export class EtudiantComponent implements OnInit {
lesEtudiants:string[];
  constructor(private etudiantService:EtudiantService) { }

  ngOnInit() {
    this.lesEtudiants = this.etudiantService.etudiants;
  }

  onAddStudent(nouveau:string)
   {
     this.etudiantService.ajouterEtudiant(nouveau);

   }

}
