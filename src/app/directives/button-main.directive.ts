import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[buttonMain]',
})
export class ButtonMainDirective {
  @HostBinding('class.button-main') public class = true;
}
