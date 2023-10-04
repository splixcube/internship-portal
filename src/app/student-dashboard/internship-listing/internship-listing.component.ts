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
  let result = res.filter(ele => {
    if(this.checkDate(ele.last_apply_date)){
      return false;
    }
    else{
return true;
    }
  
  })
  console.log(result,"result")
  this.dataSource = new MatTableDataSource<any>(result);
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
  checkDate(date:any){
    let todayDate = this.formatedDate()
    var parts = date.split('-');
var year = parts[0];
var month = parts[1];
var day = parts[2];

var formattedDate = day + '/' + month + '/' + year;

    if (formattedDate < todayDate){
 return true;
    }
    else{
      return false;
    }
  }
  formatedDate(){
    var date = new Date();

var day = date.getDate();
var month = date.getMonth() + 1; 
var year = date.getFullYear();

var formattedDate = this.padNumber(day) + '/' + this.padNumber(month) + '/' + year;
  return formattedDate;
}
   padNumber(number) {
    return (number < 10 ? '0' : '') + number;
  }
}
