import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'faq-item',
  templateUrl: './faq-item.component.html',
  styleUrls: ['./faq-item.component.scss'],
})
export class FaqItemComponent {
  @Input() question = '';

  @HostBinding('class.active')
  public isOpen = false;

  open() {
    this.isOpen = !this.isOpen;
  }
}
