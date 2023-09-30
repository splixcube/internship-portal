import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-company-login',
  templateUrl: './company-login.component.html',
  styleUrls: ['./company-login.component.scss']
})
export class CompanyLoginComponent {
  loginForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  });
  constructor(public fb: FormBuilder,public router: Router,public commonService: CommonService,
    public authService: AuthService) {}

 
  async submit() {
    try {
      let res = await this.authService.companyLogin(this.loginForm.value)
       this.commonService.showToast("Success")
        this.router.navigateByUrl("/company-dashboard")
    }
    catch (err: any) {
      localStorage.clear()
      this.commonService.showError("Error")
    }
  }
}
