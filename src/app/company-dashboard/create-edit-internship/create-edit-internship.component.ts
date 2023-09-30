import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Route } from '@angular/router';
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
  });
  id:any;
  constructor(public fb: FormBuilder,public route: ActivatedRoute,
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
  submit(){
    if(this.internshipForm.valid){
      console.log(this.internshipForm.value)
      if(this.id){
        this.companyService.updateInternship(this.id,this.internshipForm.value)
      }
      else{
        this.companyService.addInternship(this.internshipForm.value)
      }
    }
  }
}
