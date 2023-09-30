import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CommonService } from 'src/app/services/common.service';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.scss']
})
export class UpdateProfileComponent {
 profileForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
    first_name: ['', Validators.required],
    last_name: ['', Validators.required],
    dob_name: ['', Validators.required],
    school_name: ['', Validators.required],
    state: ['', Validators.required],
    school_district: ['', Validators.required],
    freshman: ['', Validators.required],
    sophomore: ['', Validators.required],
    junior: ['', Validators.required],
    senior: ['', Validators.required],
  });
  constructor(public fb: FormBuilder,public commonService: CommonService,
    public studentService: StudentService) {}

  async submit(){
    try{

     let res = await this.studentService.updateProfile(this.profileForm.value)
      this.commonService.showToast('success update')
    }
    catch(err){
      this.commonService.showError(err)
    }
  }
}
