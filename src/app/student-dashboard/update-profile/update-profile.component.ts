import { Component } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
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
    first_name: ['', Validators.required],
    last_name: ['', Validators.required],
    dob_name: ['', Validators.required],
    school_name: ['', Validators.required],
    state: ['', Validators.required],
    school_district: ['', Validators.required],
    freshman:  this.fb.array([], Validators.required),
    sophomore: this.fb.array([], Validators.required),
    junior: this.fb.array([], Validators.required),
    senior: this.fb.array([], Validators.required),
  });
  state:any = [
    "Alabama",
"Alaska",
"Arizona",
"Arkansas",
"California",
"Colorado",
"Connecticut",
'Delaware',
'Florida',
'Georgia',
'Hawaii',
'Idaho',
'Illinois',
'Indiana',
'Iowa',
'Kansas',
'Kentucky',
'Louisiana',
'Maine',
'Maryland',
'Massachusetts',
'Michigan',
'Minnesota',
'Mississippi',
'Missouri',
'Montana',
'Nebraska',
'Nevada',
'New Hampshire',
'New Jersey',
'New Mexico',
'New York',
'North Carolina',
'North Dakota',
'Ohio',
'Oklahoma',
'Oregon',
'Pennsylvania',
'Rhode Island',
'South Carolina',
'South Dakota',
'Tennessee',
'Texas',
'Utah',
'Vermont',
'Virginia',
'Washington',
'West Virginia',
'Wisconsin',
'Wyoming',
  ]
  constructor(public fb: FormBuilder,public commonService: CommonService,
    public authService: AuthService,
    public studentService: StudentService) {}
   async ngOnInit() {
        try{
          this.commonService.showLoader();
          let res:any = await this.authService.getProfileData();
           for (let index = 0; index < res.freshman.length; index++) {
             this.addFreshman()
           }
           for (let index = 0; index < res.sophomore.length; index++) {
             this.addSophomore()
           }
           for (let index = 0; index < res.junior.length; index++) {
             this.addJunior()
           }
           for (let index = 0; index < res.senior.length; index++) {
             this.addSenior()
           }
           this.profileForm.patchValue(res);
           this.commonService.hideLoader();
        }
        catch(err){
          this.commonService.showError(err);
          this.commonService.hideLoader();
        }
          
        
       
    }
  async submit(){
    this.commonService.showLoader();
    try{

     let res = await this.studentService.updateProfile(this.profileForm.value)
      this.commonService.showToast('Successfully update profile')
      this.commonService.hideLoader();
    }
    catch(err){
      this.commonService.hideLoader();
      this.commonService.showError(err)
    }
  }
  get freshman() {
    return this.profileForm.get('freshman') as FormArray;
  }
  get sophomore() {
    return this.profileForm.get('sophomore') as FormArray;
  }
  get junior() {
    return this.profileForm.get('junior') as FormArray;
  }
  get senior() {
    return this.profileForm.get('senior') as FormArray;
  }

  // Add an item to the FormArray
  addFreshman() {
    this.freshman.push(this.fb.control('', Validators.required));
  }
  addSophomore() {
    this.sophomore.push(this.fb.control('', Validators.required));
  }
  addJunior() {
    this.junior.push(this.fb.control('', Validators.required));
  }
  addSenior() {
    this.senior.push(this.fb.control('', Validators.required));
  }

  // Remove an item from the FormArray
  removeFreshman(index: number) {
    this.freshman.removeAt(index);
  }
  removeSophomore(index: number) {
    this.sophomore.removeAt(index);
  }
  removeJunior(index: number) {
    this.junior.removeAt(index);
  }
  removeSenior(index: number) {
    this.senior.removeAt(index);
  }
}
