import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { CommonService } from 'src/app/services/common.service';
import { CompanyService } from 'src/app/services/company.service';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-view-internship',
  templateUrl: './view-internship.component.html',
  styleUrls: ['./view-internship.component.scss']
})
export class ViewInternshipComponent {
  id:any;
  data:any;
  appliedInternship:any;
  constructor(public route: ActivatedRoute,private location: Location,
    public commonService: CommonService,public router: Router,
    public studentService: StudentService,public authService: AuthService,
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
   // this.commonService.showLoader();
    try{
   let res:any = await this.companyService.getSingleInternships(this.id);
   this.data = res;

   this.studentService.getMyAppliedInternships().subscribe((res:any) => {
    
   // const idToSearch = res[i].id;
      const foundObject = res.find(obj => obj.internship.id === this.id);
    
      if (foundObject) {
        this.data.alreadyApplied = 'yes';
      }
    })


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
    async apply(){
      let message = 'Are you sure you want to apply?'
      this.commonService.openCustomDialog(message).subscribe(async (result) => {
        if (result == true) {
          try{
    
            let res = await this.studentService.applyForInternship(this.id)
             this.commonService.showToast("Applied succesfull")
           }
           catch(err){
             this.commonService.showError("Applied failed")
           }
        }
      });
    
      }

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
