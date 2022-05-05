import { Component } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(private translateService: TranslocoService) {}

  changeLocale(event: any){
    this.translateService.setActiveLang(event.target.value)
  }
}
