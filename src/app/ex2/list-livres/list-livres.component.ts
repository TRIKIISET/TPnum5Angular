import { Component, OnInit } from '@angular/core';

import { Livre } from '../Livre';
import { LivresService } from '../livres.service';

@Component({
  selector: 'app-list-livres',
  templateUrl: './list-livres.component.html',
  styleUrls: ['./list-livres.component.css']
})
export class ListLivresComponent implements OnInit {

  lesLivres :Livre[];
  constructor(private livService:LivresService) { 
    this.lesLivres = livService.Livres;
  }

  onToutAnnuler()
  {
    this.livService.maz();
  }

  ngOnInit() {
  }

}
