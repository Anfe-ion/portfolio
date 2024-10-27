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
    this.translate.setDefaultLang('en');

    // Get browser language
    const browserLang = navigator.language.split('-')[0];

    // Mapping browser language to supported language
    const supportedLangs: { [key: string]: string } = {
      'en': 'en',
      'es': 'es',
      'pt': 'pt'
    };

    // Check if the browser language is supported, and use it if so
    const userLang = supportedLangs[browserLang] || 'en';

    this.translate.use(userLang);
  }
}
