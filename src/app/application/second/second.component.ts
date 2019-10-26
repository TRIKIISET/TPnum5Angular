import { Component, OnInit } from '@angular/core';
import { DateService } from '../date.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styles: []
})
export class SecondComponent implements OnInit {
date:Date = new Date();
  constructor(dateService:DateService) { 
   // this.date = dateService.dateJour();
  }

  ngOnInit() {
  }

}
