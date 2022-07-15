import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[buttonHeader]',
})
export class ButtonHeaderDirective {
  @HostBinding('class.button-header') public class = true;
}
