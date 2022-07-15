import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { InputEmailComponent } from './components/input-email/input-email.component';
import { InputTextComponent } from './components/input-text/input-text.component';

@NgModule({
  imports: [CommonModule],
  declarations: [InputTextComponent, InputEmailComponent],
  exports: [InputTextComponent, InputEmailComponent],
})
export class FormModule {}
