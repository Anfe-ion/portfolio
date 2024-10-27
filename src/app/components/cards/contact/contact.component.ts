import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ServiceComponent } from '../service.component';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'] // Asegúrate de que sea 'styleUrls' no 'styleUrl'
})
export class ContactComponent extends ServiceComponent {
  constructor(dataService: DataService, private translate: TranslateService) {
    super(dataService);
  }

  redirection(url: string, isPDF: boolean = false) {
    const langSuffix = this.translate.currentLang.toUpperCase();
    let fullURL = ''
    if (isPDF) {
      fullURL = `${url}${langSuffix}.pdf`;
      window.open(fullURL, '_blank');
    } else {
      fullURL = url
      window.open(fullURL, '_blank');
    }
  }
}
