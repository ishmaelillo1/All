import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-app-form1',
  templateUrl: './app-form1.component.html',
  styleUrls: ['./app-form1.component.css']
})
export class AppForm1Component implements OnInit {
 @ViewChild('f') signupForm: NgForm;
 defaultQuestion = 'pet';
 answer = '';
 genders = ['male', 'female'];
 user = {
   username: '',
   email: '',
   secretQuestion: '',
   answer: '',
   gender: ''
 };
 submitted = false;
 defaultGender = 'male';
 suggestUserName() {
    const suggestedName = 'Superuser';
    // this.signupForm.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: ''
    //   },
    //   secret: 'pet',
    //   questionAnswer: '',
    //   gender: 'male'
    // });
    this.signupForm.form.patchValue({
      userData: {
        username: suggestedName
      }
    });
  }
  constructor() { }

  ngOnInit() {
  }
  // onSubmit(form: NgForm) {
  //   console.log('Form Submitted');
  // }
  onSubmit() {
    //console.log(this.signupForm);
    this.user.username = this.signupForm.value.userData.username;
    this.user.email = this.signupForm.value.userData.email;
    this.user.secretQuestion = this.signupForm.value.secret;
    this.user.answer = this.signupForm.value.questionAnswer;
    this.user.gender = this.signupForm.value.gender;
    this.submitted = true;
    this.signupForm.reset();
  }
}
