import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeService {

  constructor() { }
  employes= ['Ali TIJANI','Samia Ben ALI','Khalil DRIDI', 'Cyrine Mrad'];
  getEmployes()
  {
   return ['Ali TIJANI','Samia Ben ALI','Khalil DRIDI', 'Cyrine Mrad'];
  }

  addEmploye(nom:string)
  {

      this.employes.push(nom);

  }
}
