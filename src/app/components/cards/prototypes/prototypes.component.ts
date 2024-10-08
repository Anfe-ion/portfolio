import { Component } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { ServiceComponent } from '../service.component';

@Component({
  selector: 'app-prototypes',
  templateUrl: './prototypes.component.html',
  styleUrl: './prototypes.component.scss'
})
export class PrototypesComponent extends ServiceComponent {

  constructor(dataService: DataService){
    super(dataService); 
  }
}
