import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-create-edit-internship',
  templateUrl: './create-edit-internship.component.html',
  styleUrls: ['./create-edit-internship.component.scss']
})
export class CreateEditInternshipComponent {
  internshipForm = this.fb.group({
    internship_title: ['', Validators.required],
    about_company: ['', Validators.required],
    job_description: ['', Validators.required],
    company_address: ['', Validators.required],
    company_city: ['', Validators.required],
    company_state: ['', Validators.required],
    minimum_requirenment: ['', Validators.required],
    last_apply_date: ['', Validators.required],
    internship_start: ['', Validators.required],
    internship_end: ['', Validators.required],
  });
  id:any;
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
  constructor(public fb: FormBuilder,public route: ActivatedRoute,
    public commonService: CommonService,public router: Router,
    public companyService: CompanyService) {}
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
      console.log(params,this.id)
      if(this.id){
        this.patchValue()
      }
     
    });
  }
  patchValue(){
    this.companyService.getSingleInternships(this.id).then((res) => {
      this.internshipForm.patchValue(res);
    });
 
  }
 async submit(){
    if(this.internshipForm.valid){
      console.log(this.internshipForm.value)
      if(this.id){
        try{

          let res = await  this.companyService.updateInternship(this.id,this.internshipForm.value)
          this.router.navigateByUrl("/company-dashboard")
           this.commonService.showToast('Successfully update internship')
         }
         catch(err){
           this.commonService.showError(err)
         }
       
      }
      else{
        try{
          let res = await this.companyService.addInternship(this.internshipForm.value)
          this.router.navigateByUrl("/company-dashboard")
          this.commonService.showToast('Successfully create internship')
         }
         catch(err){
           this.commonService.showError(err)
         }
        
      }
    }
  }
}
