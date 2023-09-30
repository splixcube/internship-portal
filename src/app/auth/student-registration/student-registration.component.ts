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
  constructor(public fb: FormBuilder,public authService: AuthService) {}

  submit(){
    if(this.registrationForm.valid){
      console.log(this.registrationForm.value)
      this.authService.registerStudent(this.registrationForm.value)
    }
  }
}
