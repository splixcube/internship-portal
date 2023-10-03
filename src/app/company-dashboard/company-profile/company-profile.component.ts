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
  async ngOnInit() {

    try{
      this.commonService.showLoader();
      let res:any = await this.authService.getProfileData(); 
        this.profileForm.patchValue(res);
        this.commonService.hideLoader();
    }
    catch(err){
      this.commonService.showError(err);
      this.commonService.hideLoader();
    }
     
  }
 async submit(){
  this.commonService.showLoader();
    try{

     let res = await this.companyService.updateProfile(this.profileForm.value)
      this.commonService.showToast('Successfully update profile')
      this.commonService.hideLoader();
    }
    catch(err){
      this.commonService.hideLoader();
      this.commonService.showError(err)
    }
  }
  
}
