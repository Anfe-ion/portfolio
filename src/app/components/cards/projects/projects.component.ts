import { Component, Input } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { ServiceComponent } from '../service.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent extends ServiceComponent {

  @Input() en!: boolean
  @Input() es!: boolean
  @Input() pt!: boolean

  constructor(dataService: DataService) {
    super(dataService);    
  }
}
