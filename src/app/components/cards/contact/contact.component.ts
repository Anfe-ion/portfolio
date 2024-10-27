import { Component } from '@angular/core';
import { ServiceComponent } from '../service.component';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent extends ServiceComponent {

  constructor(dataService:DataService){
    super(dataService)
  }
  
}
