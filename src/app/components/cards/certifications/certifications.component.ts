import { Component, Input } from '@angular/core';
import { ServiceComponent } from '../service.component';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrl: './certifications.component.scss'
})
export class CertificationsComponent extends ServiceComponent {
  @Input() en!: boolean
  @Input() es!: boolean
  @Input() pt!: boolean

  constructor(dataService: DataService) {
    super(dataService);
  }
    
}