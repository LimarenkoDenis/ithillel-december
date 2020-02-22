import { delay } from 'rxjs/operators';
import { AbstractControl, ValidationErrors } from '@angular/forms';
import { Observable, of } from 'rxjs';


export function asyncEmailValidator(
  control: AbstractControl
): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {

  console.log(4234234);

  const emails: string[] = ['limarenkodenis@gmail.com'];

  const errors: ValidationErrors | null = emails.includes(control.value) ?
    { exist: true } :
    null;


    console.log('Email', errors);

  // this.service.cehckEmail(control.value);

  return of(errors).pipe(
    delay(2000)
  );
}

