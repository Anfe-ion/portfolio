import { Component } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { ServiceComponent } from '../service.component';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent extends ServiceComponent {

  constructor(dataService: DataService, translate: TranslateService){
    super(dataService, translate);
  }
}
