import { Component, OnInit } from '@angular/core';
import { TrialService } from '../trial.service';

@Component({
  selector: 'app-exemple',
  templateUrl: './exemple.component.html',
  styleUrls: ['./exemple.component.css'],
  providers:[TrialService]
})
export class ExempleComponent implements OnInit {
nombre :number = this.trialService.renvoyer();
  constructor(private trialService: TrialService) { }

  ngOnInit() {
  // this.nombre = this.trialService.renvoyer();
  }

}
