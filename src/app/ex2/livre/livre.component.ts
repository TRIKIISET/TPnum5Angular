import { Component, OnInit, Input } from '@angular/core';
import { Livre } from '../Livre';
import { LivresService } from '../livres.service';

@Component({
  selector: 'app-livre',
  templateUrl: './livre.component.html',
  styleUrls: ['./livre.component.css']
})
export class LivreComponent implements OnInit {

  @Input() livre:Livre;
  @Input() indexLivre:number;
  prixPromotionnel:number =0;
  onPromo(red:string)
  {
    this.prixPromotionnel = this.livreService.mettreEnPromo(Number(red),this.indexLivre);
  }
  onAnnuler()
{
  this.livre.reduction =0;
}
  enPromo()
  {
    return this.livreService.estEnPromo(this.indexLivre);
  }

  constructor(private livreService:LivresService) {

   }

  ngOnInit() {
  }

}
