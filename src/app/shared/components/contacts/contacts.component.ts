import { PizzaValidators } from './../../validators/password-match.validator';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormArray, FormBuilder } from '@angular/forms';
import { passwordValidator } from '../../validators/password.validator';
import {asyncEmailValidator} from '../../validators/async-email.validator';


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  public form: FormGroup = this._fb.group({
    name: this._fb.control('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email],
    [asyncEmailValidator]),
    password: new FormControl('', [
      Validators.required, Validators.minLength(6), Validators.maxLength(18), passwordValidator(10)]),
    confirmPassord: new FormControl('', [Validators.required, Validators.minLength(6)]),
    gender: new FormControl(''),
    birthday: new FormControl(),
    policy: new FormControl(false, Validators.requiredTrue),
    policy2: new FormControl(),
    policy3: new FormControl(),
    account: new FormGroup({
      policy3: new FormControl(),
    }),
    photos: new FormArray([])
  }, {
    validators: [PizzaValidators.checkPasswordMatch]
  });

  constructor(
     private _fb: FormBuilder
  ) { }

  ngOnInit() {
    // this.form.valueChanges.subscribe(() => {
    //   console.log(this.form);
    // });


    this.form.get('password').valueChanges.subscribe(() => {
      console.log(this.form.get('password').errors);
    });

    this.form.get('email').valueChanges.subscribe(() => {
      console.log(this.form.get('email'));
    });



    // setTimeout(() => {
    //   this.form.setValidators()
    // }, 2000)
  }


  save() {
    console.log(this.form.value);

  }
}
