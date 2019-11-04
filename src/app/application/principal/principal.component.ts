import { Component, OnInit } from '@angular/core';
import {DateService} from '../date.service';
import { TrialService } from 'src/app/essai/trial.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  laDate: Date; 
  constructor(private dateService:DateService) {
   }

  ngOnInit() {
        // Récupération de la date à partir du service
        this.laDate = this.dateService.dateJour(); 
  }

}
