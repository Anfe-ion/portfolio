import { Component } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { ServiceComponent } from '../service.component';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-prototypes',
  templateUrl: './prototypes.component.html',
  styleUrl: './prototypes.component.scss'
})
export class PrototypesComponent extends ServiceComponent {

  constructor(dataService: DataService, translate: TranslateService){
    super(dataService, translate); 
  }
}
