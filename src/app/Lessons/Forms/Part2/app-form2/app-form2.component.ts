import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-app-form2',
  templateUrl: './app-form2.component.html',
  styleUrls: ['./app-form2.component.css']
})
export class AppForm2Component implements OnInit {
  genders = ['male', 'female'];
  signupForm: FormGroup;
  forbiddenUsername = ['Chris', 'Anna'];
  constructor() { }

  ngOnInit() {
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
      'userName': new FormControl (null, [Validators.required, this.forbiddenNames.bind(this)]),
      'email': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails)
      }),
      'gender': new FormControl('male'),
      'hobbies': new FormArray([])
    });
    this.signupForm.valueChanges.subscribe(
      (value) => console.log('Value: ' + value)
    );
    this.signupForm.statusChanges.subscribe(
      (status) => console.log('Status ' + status)
    );
    this.signupForm.setValue({
      'userData': {
        'userName': 'Max',
        'email': 'test@test.com'
      },
      'gender': 'male',
      'hobbies': []
    });
    this.signupForm.patchValue({
      'userData': {
        'userName': 'Anna',
      },
    });
  }
  onSubmit() {
    console.log(this.signupForm);
    this.signupForm.reset({
      'userData': {
        'userName': 'Max',
        'email': 'test@test.com'
      },
      'gender': 'male',
      'hobbies': []
    });
  }
  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control);
  }
  forbiddenNames(control: FormControl): {[s: string]: boolean} {
    if (this.forbiddenUsername.indexOf(control.value) !== -1) {
      return {'nameisForbidden': true};
    }
    return null;
  }
  forbiddenEmails(control: FormControl): Promise<any>  | Observable<any>{
    const promise = new Promise <any> ((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test@test.com') {
          resolve ({'emailIsForbidden': true});
        } else {
          resolve (null);
        }
      }, 1500);
    });
    return promise;
  }
}
