import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NomServiceService {

  constructor() { }

  date()
  {
    return new Date();
  }
}
