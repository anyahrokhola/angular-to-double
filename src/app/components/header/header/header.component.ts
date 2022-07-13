import { Component } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public isOpen = false;

  constructor() {}

  public open() {
    this.isOpen = !this.isOpen;
  }
}
