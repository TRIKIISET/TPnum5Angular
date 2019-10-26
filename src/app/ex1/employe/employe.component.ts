import { Component, OnInit } from '@angular/core';
import { EmployeService } from '../employe.service';
import { DateService } from 'src/app/application/date.service';

@Component({
  selector: 'app-employe',
  templateUrl: './employe.component.html',
  styleUrls: ['./employe.component.css']
})
export class EmployeComponent implements OnInit {

  employes;
  constructor(private serviceEmployés:EmployeService) {
      this.employes = serviceEmployés.employes;

   }

  ngOnInit() {
  }

}
