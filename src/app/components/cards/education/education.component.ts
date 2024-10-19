import { Component } from '@angular/core';
import { ServiceComponent } from '../service.component';
import { DataService } from '../../../services/data.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss'
})
export class EducationComponent extends ServiceComponent {

  constructor(dataService: DataService, translate: TranslateService) {
    super(dataService, translate);
  }
}