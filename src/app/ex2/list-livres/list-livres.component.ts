import { Component, OnInit } from '@angular/core';

import { Livre } from '../Livre';
import { LivresService } from '../livres.service';
import { NomServiceService } from 'src/app/nom-service.service';

@Component({
  selector: 'app-list-livres',
  templateUrl: './list-livres.component.html',
  styleUrls: ['./list-livres.component.css']

})
export class ListLivresComponent implements OnInit {

  lesLivres :Livre[];
  constructor(private livService:LivresService, private serviceDtae: NomServiceService) { 
  }

  onToutAnnuler()
  {
    this.livService.annulerReduction();
  }

  laDate: Date;
  ngOnInit() {
    this.lesLivres = this.livService.Livres;
    this.laDate = this.serviceDtae.date();
  }

}
