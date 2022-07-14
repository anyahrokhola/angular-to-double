import { Component, Input } from '@angular/core';

@Component({
  selector: 'faq-item',
  templateUrl: './faq-item.component.html',
  styleUrls: ['./faq-item.component.scss']
})
export class FaqItemComponent  {
  @Input() question = '';
  @Input() answer = '';
  public isOpen = false;

  constructor() { }

  open(){
    this.isOpen = !this.isOpen
  }
}
