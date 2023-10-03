import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-student-login',
  templateUrl: './student-login.component.html',
  styleUrls: ['./student-login.component.scss']
})
export class StudentLoginComponent {
  loginForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  });
  constructor(public fb: FormBuilder,public router: Router,
    public commonService: CommonService,
    public authService: AuthService) {}

 
  async submit() {
    try {
      let res = await this.authService.studentLogin(this.loginForm.value)
       this.commonService.showToast("Successfully login")
    }
    catch (err: any) {
      localStorage.clear()
      this.commonService.showError(err)
    }
  }
}
