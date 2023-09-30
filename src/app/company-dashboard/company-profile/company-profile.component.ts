import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { CommonService } from 'src/app/services/common.service';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-company-profile',
  templateUrl: './company-profile.component.html',
  styleUrls: ['./company-profile.component.scss']
})
export class CompanyProfileComponent {
  profileForm = this.fb.group({
    email: ['', Validators.required],
    company_name: ['', Validators.required],
    company_website: ['', Validators.required],
    company_address: ['', Validators.required],
    company_city: ['', Validators.required],
    company_state: ['', Validators.required],
  });
  constructor(public fb: FormBuilder,public authService: AuthService,
    public commonService: CommonService,
    public companyService: CompanyService) {}
  ngOnInit(): void {
    setTimeout(() => {
      if(this.authService.profileData){
        console.log(this.authService.profileData)
        this.profileForm.patchValue(this.authService.profileData) 
      }
    }, 2000);
   
  }
 async submit(){
    try{

     let res = await this.companyService.updateProfile(this.profileForm.value)
      this.commonService.showToast('success update')
    }
    catch(err){
      this.commonService.showError(err)
    }
  }
}
