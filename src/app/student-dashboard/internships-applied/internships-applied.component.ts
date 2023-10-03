import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-internships-applied',
  templateUrl: './internships-applied.component.html',
  styleUrls: ['./internships-applied.component.scss']
})
export class InternshipsAppliedComponent {
  displayedColumns: string[] = ['sno', 'name','status'];
  dataSource: any = [];
list:any;
  constructor(public studentService: StudentService,
    public commonService: CommonService,
    public router: Router){}
  ngOnInit(): void {
    this.studentService.getMyAppliedInternships().subscribe((res) => {
      this.list = res;
      this.dataSource = new MatTableDataSource<any>(res);
    },
    (error) => {
      this.commonService.showError("Failed");
    });
  }
  doFilter = (event: any) => {
    this.dataSource.filter = event.target.value.trim().toLocaleLowerCase();
  };
}
