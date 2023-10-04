import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent {
  forgotForm = this.fb.group({
    email: ['', Validators.required]
  });
  constructor(public fb: FormBuilder,public router: Router,
    public commonService: CommonService,
    public authService: AuthService) {}

    async submit() {
      try {
        let res = await this.authService.forgetPassword(this.forgotForm.value)
         this.commonService.showToast("Password reset link sent to your register email.")
         this.router.navigateByUrl('/login');
        }
      catch (err: any) {
        this.commonService.showError(err)
      }
    }
}
