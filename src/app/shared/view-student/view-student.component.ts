import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.scss']
})
export class ViewStudentComponent {
  id:any;
  data:any;
  constructor(public route: ActivatedRoute,private location: Location,
    public commonService: CommonService,public router: Router,
    public companyService: CompanyService) {}
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
      console.log(params,this.id)
      if(this.id){
        this.getData()
      }
     
    });
  }
  async getData(){
    //this.commonService.showLoader();
    try{
   let res = await this.companyService.getSingleStudentsApplied(this.id);
   this.data = res;
   this.commonService.hideLoader();
    }
     catch(err){
      console.log(err)
      this.commonService.showError("Failed")
      this.commonService.hideLoader();
     }
    }
    back(){
      this.location.back();
    }
}
