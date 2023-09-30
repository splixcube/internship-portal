import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-company-profile',
  templateUrl: './company-profile.component.html',
  styleUrls: ['./company-profile.component.scss']
})
export class CompanyProfileComponent {
  profileForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
    company_name: ['', Validators.required],
    company_website: ['', Validators.required],
    company_address: ['', Validators.required],
    company_city: ['', Validators.required],
    company_state: ['', Validators.required],
  });
  constructor(public fb: FormBuilder,
    public companyService: CompanyService) {}
  ngOnInit(): void {
   
  }
  submit(){
    if(this.profileForm.valid){
      console.log(this.profileForm.value)
      this.companyService.updateProfile(this.profileForm.value)
    }
  }
}
