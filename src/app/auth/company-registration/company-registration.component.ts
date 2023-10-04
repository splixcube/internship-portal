import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-company-registration',
  templateUrl: './company-registration.component.html',
  styleUrls: ['./company-registration.component.scss'],
})
export class CompanyRegistrationComponent {
  registrationForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
    company_name: ['', Validators.required],
    company_website: ['', Validators.required],
    company_address: ['', Validators.required],
    company_city: ['', Validators.required],
    company_state: ['', Validators.required],
  });
  state:any = [
    "Alabama",
"Alaska",
"Arizona",
"Arkansas",
"California",
"Colorado",
"Connecticut",
'Delaware',
'Florida',
'Georgia',
'Hawaii',
'Idaho',
'Illinois',
'Indiana',
'Iowa',
'Kansas',
'Kentucky',
'Louisiana',
'Maine',
'Maryland',
'Massachusetts',
'Michigan',
'Minnesota',
'Mississippi',
'Missouri',
'Montana',
'Nebraska',
'Nevada',
'New Hampshire',
'New Jersey',
'New Mexico',
'New York',
'North Carolina',
'North Dakota',
'Ohio',
'Oklahoma',
'Oregon',
'Pennsylvania',
'Rhode Island',
'South Carolina',
'South Dakota',
'Tennessee',
'Texas',
'Utah',
'Vermont',
'Virginia',
'Washington',
'West Virginia',
'Wisconsin',
'Wyoming',
  ]
  constructor(public fb: FormBuilder,public authService: AuthService) {}

  submit(){
    if(this.registrationForm.valid){
      console.log(this.registrationForm.value)
      this.authService.registerCompany(this.registrationForm.value)
    }
  }
}
