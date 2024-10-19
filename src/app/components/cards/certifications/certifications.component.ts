import { Component } from '@angular/core';
import { ServiceComponent } from '../service.component';
import { DataService } from '../../../services/data.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrl: './certifications.component.scss'
})
export class CertificationsComponent extends ServiceComponent {

  constructor(dataService: DataService, translate: TranslateService) {
    super(dataService, translate);
  }
  
}
