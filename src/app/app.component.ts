import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
  constructor(private translate: TranslateService) {
    // Establece el idioma predeterminado
    this.translate.setDefaultLang('en');
  }

  switchLanguage(language: string) {
    this.translate.use(language);
  }
}
