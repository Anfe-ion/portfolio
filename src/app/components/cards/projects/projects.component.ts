import { Component } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { ServiceComponent } from '../service.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent extends ServiceComponent {

  constructor(dataService: DataService){
    super(dataService);
  }
}
