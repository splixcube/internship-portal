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
 appliedInternship:any =[];
  constructor(public studentService: StudentService,public commonService: CommonService,
    public router: Router){}
  ngOnInit(): void {
    this.studentService.getMyAppliedInternships().subscribe((res) => {
 this.appliedInternship = res;
 this.studentService.getAllInternships().subscribe((res:any) => {
  for (let i = 0; i < res.length; i++) {
    const idToSearch = res[i].id;
    const foundObject = this.appliedInternship.find(obj => obj.internship.id === idToSearch);
  
    if (foundObject) {
      res[i].alreadyApplied = 'yes';
    }
  }
  this.dataSource = new MatTableDataSource<any>(res);
},
(error) => {
  this.commonService.showError("Failed")
});
    },
    (error) => {
      this.commonService.showError("Failed")
    });
    
  }

 async apply(item:any){
  let message = 'Are you sure you want to apply?'
  this.commonService.openCustomDialog(message).subscribe(async (result) => {
    if (result == true) {
      try{

        let res = await this.studentService.applyForInternship(item.id)
         this.commonService.showToast("Applied succesfully")
       }
       catch(err){
         this.commonService.showError("Applied failed")
       }
    }
  });

  }
  viewItem(item:any){
    this.router.navigate(['/student-dashboard/view-internship/',item.id])
  }
  doFilter = (event: any) => {
    this.dataSource.filter = event.target.value.trim().toLocaleLowerCase();
  };
}
