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
list:any;
  constructor(public companyService: CompanyService,public commonService: CommonService,
    public router: Router){}
  ngOnInit(): void {
    this.companyService.getMyInternships().subscribe((res) => {
      this.list = res;
      this.dataSource = new MatTableDataSource<any>(res);
    },
    (error) => {
      this.commonService.showError("Failed")
    });
  }
  deleteItem(item:any){
    this.commonService.openDeleteDialog().subscribe((result) => {
      if (result == true) {
        this.companyService.deleteIntership(item.id).then(res=>{
         this.commonService.showToast("Deleted Successfully")
        }).catch(err=>{
          this.commonService.showToast("Error Occoured")
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
  view(item:any){
    this.router.navigate(['/company-dashboard/view-internship/',item.id])
  }
  doFilter = (event: any) => {
    this.dataSource.filter = event.target.value.trim().toLocaleLowerCase();
  };
}
