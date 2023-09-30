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
  constructor(public route: ActivatedRoute,
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
    try{
   let res = await this.companyService.getSingleInternships(this.id);
   console.log(res,'res')
    }
     catch(err){
      console.log(err)
     }
    }
}
