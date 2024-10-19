import { Component } from '@angular/core';
import { ServiceComponent } from '../service.component';
import { DataService } from '../../../services/data.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent extends ServiceComponent {

  constructor(dataService:DataService, translate: TranslateService){
    super(dataService, translate)
  }

}
