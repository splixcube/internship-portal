import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-internship-listing',
  templateUrl: './internship-listing.component.html',
  styleUrls: ['./internship-listing.component.scss']
})
export class InternshipListingComponent {
  displayedColumns: string[] = ['sno', 'name','lastdate', 'action'];
  dataSource: any = [];

  constructor(public studentService: StudentService,public commonService: CommonService,
    public router: Router){}
  ngOnInit(): void {
    this.studentService.getAllInternships().subscribe((res) => {
      this.dataSource = new MatTableDataSource<any>(res);
    });
  }

 async apply(item:any){
try{
  
 let res = await this.studentService.applyForInternship(item.id)
  this.commonService.showToast("applied succesfull")
}
catch(err){
  this.commonService.showError("applied failed")
}
  }
  viewItem(item:any){

  }
}
