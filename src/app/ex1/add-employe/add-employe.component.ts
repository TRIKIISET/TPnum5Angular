import { Component, OnInit } from '@angular/core';
import { EmployeService } from '../employe.service';

@Component({
  selector: 'app-add-employe',
  templateUrl: './add-employe.component.html',
  styleUrls: ['./add-employe.component.css']
})
export class AddEmployeComponent implements OnInit {

employes;
  constructor(private employeService:EmployeService) {
this.employes = employeService.employes;
   }

   onAjouter(nom:string)
   {
     this.employeService.addEmploye(nom);
   
   }

  ngOnInit() {
  }

}
