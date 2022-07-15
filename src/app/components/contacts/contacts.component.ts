import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent{
  public form = new FormGroup({
    name: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  public get nameControl(): FormControl {
    return this.form.controls.name;
  }
  public get phoneControl(): FormControl {
    return this.form.controls.phone;
  }
  public get emailControl(): FormControl {
    return this.form.controls.email;
  }

  hasError(control: FormControl): boolean {
    return control.invalid && (control.dirty || control.touched);
  }

  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.form.reset();
    alert('Форма отправлена');
  }
}
