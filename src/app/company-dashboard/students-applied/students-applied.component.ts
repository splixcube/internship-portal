import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-students-applied',
  templateUrl: './students-applied.component.html',
  styleUrls: ['./students-applied.component.scss']
})
export class StudentsAppliedComponent {
  displayedColumns: string[] = ['sno', 'name','lastdate','status', 'action'];
  dataSource: any = [];
id:any;
list:any
  constructor(public companyService: CompanyService,public route: ActivatedRoute,
    public commonService: CommonService,private location: Location,
    public router: Router){}
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
      console.log(params,this.id)
      if(this.id){
        this.companyService.getStudentsApplied(this.id).subscribe((res) => {
          console.log(res)
          this.list = res;
          this.dataSource = new MatTableDataSource<any>(res);
        },
        (error) => {
          this.commonService.showError("Failed")
        });
      }
    });
  }

  view(item:any){
    this.router.navigate(['/company-dashboard/view-student/',item.id])
  }
 async changeStatus(id:any,status:any){
  try{
    let data = {
      status : status
     }
   let res =  this.companyService.updateStudentsApplied(id,data);
   this.commonService.showToast("Status Updated")
  }
 catch(err) {
  this.commonService.showError("Failed")
 }
  }
  doFilter = (event: any) => {
    this.dataSource.filter = event.target.value.trim().toLocaleLowerCase();
  };
  back(){
    this.location.back();
  }
}
