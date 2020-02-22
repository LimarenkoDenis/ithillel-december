import { AbstractControl, FormGroup, FormControl } from '@angular/forms';

export class PizzaValidators {
  static checkPasswordMatch(control: FormGroup) {
    const password: AbstractControl = control.get('password');
    const confirm = control.get('confirmPassord');



    if (!(password && confirm)) return null;
    return password.value === confirm.value ? null : { nomatch: true };
  }
}
