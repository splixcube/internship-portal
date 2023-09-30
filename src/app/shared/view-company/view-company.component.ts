import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { CommonService } from 'src/app/services/common.service';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-view-company',
  templateUrl: './view-company.component.html',
  styleUrls: ['./view-company.component.scss']
})
export class ViewCompanyComponent {
  id:any;
  data:any;
  constructor(public route: ActivatedRoute,public authService: AuthService,
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
  this.data = this.authService.profileData
  console.log(this.data)
  }
}
