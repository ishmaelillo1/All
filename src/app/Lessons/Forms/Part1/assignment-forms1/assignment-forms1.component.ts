import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-assignment-forms1',
  templateUrl: './assignment-forms1.component.html',
  styleUrls: ['./assignment-forms1.component.css']
})
export class AssignmentForms1Component implements OnInit {
  @ViewChild('f') assignmentForm: NgForm;
  subscriptions = ['basic', 'advanced', 'pro'];
  formData = {
    email: '',
    subscription: '',
    password: ''
  };
  submitted = false;
  selectedSubscription = 'advanced';
  constructor() { }

  ngOnInit() {
  }
  onSubmit() {
    this.submitted = true;
    this.formData.email = this.assignmentForm.value.email;
    this.formData.subscription = this.assignmentForm.value.subscription;
    this.formData.password = this.assignmentForm.value.password;
    this.assignmentForm.reset();
  }
}
