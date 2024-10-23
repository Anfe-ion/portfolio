import { Component, Input } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { ServiceComponent } from '../service.component';

@Component({
  selector: 'app-prototypes',
  templateUrl: './prototypes.component.html',
  styleUrl: './prototypes.component.scss'
})
export class PrototypesComponent extends ServiceComponent {
  @Input() en!: boolean
  @Input() es!: boolean
  @Input() pt!: boolean

  constructor(dataService: DataService){
    super(dataService); 
  }
}
