import { Injectable } from '@angular/core';
import { Livre } from './Livre';

@Injectable({
  providedIn: 'root'
})
export class LivresService {

  Livres = [ new Livre("pi15","Pivoine","Pearl Buck",27.8, new Date(1960,5,4),true),
  new Livre("kh289","Khan El Khalili","Nejib Mahfoudh",14.5, new Date(1978,2,14), false),
  new Livre("zid874","17 Ramadan","Jorgi Zaidane",8.6, new Date(1980,3,28),false)
  ];

  mettreEnPromo(val:number, index:number)
  {
    this.Livres[index].reduction = val;
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

  maz()
  {
    for (let l of this.Livres)
      l.reduction =0;
  }
  constructor() { }
}
