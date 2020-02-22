import { AbstractControl, FormControl, ValidationErrors } from '@angular/forms';

export function passwordValidator(param: number): (control: FormControl) => ValidationErrors | null {

  return function(control: FormControl): ValidationErrors | null  {

    console.log(param, control);

    if (control.value.includes('-')) {
      return {
        noDesh: true
      };
    }

    if (control.value.includes('+')) {
      return {
        noPlus: true
      };
    }

    return null;
  };

}
