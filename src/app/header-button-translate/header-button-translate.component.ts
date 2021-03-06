import { Component, OnInit } from '@angular/core';

import {TranslateService} from '@ngx-translate/core';


@Component({
  selector: 'app-header-button-translate',
  templateUrl: './header-button-translate.component.html',
  styleUrls: ['./header-button-translate.component.css']
})
export class HeaderButtonTranslateComponent implements OnInit {

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('es');
  }

  ngOnInit(): void {
    this.translate.use('es');

  }

  useLanguage(language: string): void {
    this.translate.use(language);
  }

}
