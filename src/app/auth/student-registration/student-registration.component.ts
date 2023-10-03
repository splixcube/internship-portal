import { Component } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
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
    freshman:  this.fb.array([], Validators.required),
    sophomore: this.fb.array([], Validators.required),
    junior: this.fb.array([], Validators.required),
    senior: this.fb.array([], Validators.required),
  });
  constructor(public fb: FormBuilder,public authService: AuthService) {
    this.addFreshman()
    this.addSophomore()
    this.addJunior()
    this.addSenior()
  }

  submit(){
    if(this.registrationForm.valid){
      console.log(this.registrationForm.value)
      this.authService.registerStudent(this.registrationForm.value)
    }
 
  }
  get freshman() {
    return this.registrationForm.get('freshman') as FormArray;
  }
  get sophomore() {
    return this.registrationForm.get('sophomore') as FormArray;
  }
  get junior() {
    return this.registrationForm.get('junior') as FormArray;
  }
  get senior() {
    return this.registrationForm.get('senior') as FormArray;
  }

  // Add an item to the FormArray
  addFreshman() {
    this.freshman.push(this.fb.control('', Validators.required));
  }
  addSophomore() {
    this.sophomore.push(this.fb.control('', Validators.required));
  }
  addJunior() {
    this.junior.push(this.fb.control('', Validators.required));
  }
  addSenior() {
    this.senior.push(this.fb.control('', Validators.required));
  }

  // Remove an item from the FormArray
  removeFreshman(index: number) {
    this.freshman.removeAt(index);
  }
  removeSophomore(index: number) {
    this.sophomore.removeAt(index);
  }
  removeJunior(index: number) {
    this.junior.removeAt(index);
  }
  removeSenior(index: number) {
    this.senior.removeAt(index);
  }
}
