import { Component, Input } from '@angular/core';
import { ServiceComponent } from '../service.component';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss'
})
export class EducationComponent extends ServiceComponent {

  @Input() en!: boolean
  @Input() es!: boolean
  @Input() pt!: boolean
  
  constructor(dataService: DataService) {
    super(dataService);
  }
}