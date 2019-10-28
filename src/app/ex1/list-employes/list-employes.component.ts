import { Component, OnInit } from '@angular/core';
import { EmployeService } from '../employe.service';


@Component({
  selector: 'app-list-employes',
  templateUrl: './list-employes.component.html',
  styleUrls: ['./list-employes.component.css']
})
export class ListEmployesComponent implements OnInit {

  employes;
  constructor(private employeService:EmployeService) {

   }

  ngOnInit() {
    this.employes = this.employeService.employes;
  }

}
