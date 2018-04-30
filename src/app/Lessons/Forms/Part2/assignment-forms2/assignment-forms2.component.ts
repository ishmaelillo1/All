import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-assignment-forms2',
  templateUrl: './assignment-forms2.component.html',
  styleUrls: ['./assignment-forms2.component.css']
})
export class AssignmentForms2Component implements OnInit {
  projectStatus = ['Stable', 'Critical', 'Finished'];
  assignmentForm: FormGroup;
  forbiddenProjectNames = ['Test'];
  constructor() { }

  ngOnInit() {
    this.assignmentForm = new FormGroup ({
      'projectData': new FormGroup({
        'projectName': new FormControl (null, [Validators.required, this.forbiddenNames.bind(this)], this.forbiddenNamesAsync),
        'email': new FormControl (null, [Validators.required, Validators.email])
      }),
      'status': new FormControl (this.projectStatus[1])
    });
  }
  forbiddenNames (control: FormControl): {[s: string]: boolean} {
    if ( this.forbiddenProjectNames.indexOf(control.value) !== -1 ) {
      return {'projectIsForbidden': true};
    }
    return null;
  }
  onSubmit() {
    console.log(this.assignmentForm);
    this.assignmentForm.reset({
      'projectData': {
        'projectName': 'Saluditos',
        'email': 'test@test.com'
      },
      'status': this.projectStatus[1]
    });
  }
  forbiddenNamesAsync(control: FormControl): Promise<any>  | Observable<any> {
    console.log('Inside Async: ' + control.value);
    const promise = new Promise <any> ((resolve, reject) => {
      setTimeout(() => {
        if ( control.value === 'Hola' ) {
          resolve ({'projectIsForbidden': true});
        } else {
          resolve (null);
        }
      }, 1500);
    });
    return promise;
  }
}
