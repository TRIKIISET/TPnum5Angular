import { Injectable } from '@angular/core';
import { Livre } from './Livre';

@Injectable({
  providedIn: 'root'
})
export class LivresService {

  Livres = [ new Livre("Pivoine","Pearl Buck",27.8),
  new Livre("Khan El Khalili","Nejib Mahfoudh",14.5),
  new Livre("17 Ramadan","Jorgi Zaidane",8.6)
  ];

  mettreEnPromo(reduction:number, index:number)
  {
    this.Livres[index].reduction = reduction;
    return this.Livres[index].prix *(100-this.Livres[index].reduction)/100.0;
  }

  estEnPromo(index:number)
  {
    return this.Livres[index].reduction>0;
  }

  addLivre(l:Livre)
  {
    this.Livres.push(l);
  }

  annulerReduction()
  {
    for (let l of this.Livres)
      l.reduction =0;
  }
  constructor() { }
}
