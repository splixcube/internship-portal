import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-student-registration',
  templateUrl: './student-registration.component.html',
  styleUrls: ['./student-registration.component.scss']
})
export class StudentRegistrationComponent {
  registrationForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
    first_name: ['', Validators.required],
    last_name: ['', Validators.required],
    dob_name: ['', Validators.required],
    school_name: ['', Validators.required],
    state: ['', Validators.required],
    school_district: ['', Validators.required],
    freshman: ['', Validators.required],
    sophomore: ['', Validators.required],
    junior: ['', Validators.required],
    senior: ['', Validators.required],
  });
  freshmanList: any =[
    {title: 'abc', value:'123'},
    {title: 'def', value:'456'},
    {title: 'ghi', value:'789'}
  ]
  sophomoreList: any =[
    {title: 'aabc', value:'123'},
    {title: 'ddef', value:'456'},
    {title: 'gghi', value:'789'}
  ]
 juniorList: any =[
    {title: 'jabc', value:'123'},
    {title: 'jdef', value:'456'},
    {title: 'jghi', value:'789'}
  ]
  seniorList: any =[
    {title: 'sabc', value:'123'},
    {title: 'sdef', value:'456'},
    {title: 'sghi', value:'789'}
  ]
  constructor(public fb: FormBuilder,public authService: AuthService) {}

  submit(){
    if(this.registrationForm.valid){
      console.log(this.registrationForm.value)
      this.authService.registerStudent(this.registrationForm.value)
    }
  }
}
