import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-my-internships',
  templateUrl: './my-internships.component.html',
  styleUrls: ['./my-internships.component.scss']
})
export class MyInternshipsComponent {
  displayedColumns: string[] = ['sno', 'name','lastdate', 'action'];
  dataSource: any = [];

  constructor(public companyService: CompanyService,public commonService: CommonService,
    public router: Router){}
  ngOnInit(): void {
    this.companyService.getMyInternships().subscribe((res) => {
      this.dataSource = new MatTableDataSource<any>(res);
    });
  }
  deleteItem(item:any){
    this.commonService.openDeleteDialog().subscribe((result) => {
      if (result == true) {
        this.companyService.deleteIntership(item.id).then(res=>{
        //  this.commonService.s("Deleted Successfully","")
        }).catch(err=>{
         // this.commonService.showError("Error Occoured","Please try again")
        })
      }
    });
 
  }
  editItem(item:any){
    this.router.navigate(['/company-dashboard/edit-internship/',item.id])
  }
  viewAplicant(item:any){
    this.router.navigate(['/company-dashboard/applied-students/',item.id])
  }
}
