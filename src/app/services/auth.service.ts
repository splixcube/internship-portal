import { Injectable, inject } from '@angular/core';
import { CommonService } from './common.service';
import {
  Firestore,
  doc,
  docData,
  getDoc,
  setDoc,
} from '@angular/fire/firestore';
import {
  Auth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
} from '@angular/fire/auth';
import { Router } from '@angular/router';
import { CompanyService } from './company.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  firestore: Firestore = inject(Firestore);
  auth: Auth = inject(Auth);
  userData;
  constructor(public common: CommonService,public companyService: CompanyService,
     public router: Router) {
    onAuthStateChanged(this.auth, (state) => {
      console.log(state);
      if (state) {
        const aDoccument = doc(this.firestore, `users/${state.uid}`);
        docData(aDoccument).subscribe((data: any) => {
          this.userData = data;
        });
      }
    });
  }

  async registerCompany(data) {
    data.type = 'company';
    this.common.showLoader();
    try {
      let res: any = await createUserWithEmailAndPassword(
        this.auth,
        data.email,
        data.password
      );
      const aDoccument = doc(this.firestore, `users/${res.user.uid}`);
      delete data.password;
      await setDoc(aDoccument, data);
      localStorage.setItem('uid', res.user.uid);
      localStorage.setItem('type', data.type);
      this.router.navigateByUrl('/company-dashboard');
      this.common.hideLoader();
    } catch (err) {
      console.log(err);
      this.common.showError('Email Already in use');
      this.common.hideLoader();
    }
  }

  async registerStudent(data) {
    data.type = 'student';
    this.common.showLoader();
    try {
      let res: any = await createUserWithEmailAndPassword(
        this.auth,
        data.email,
        data.password
      );
      const aDoccument = doc(this.firestore, `users/${res.user.uid}`);
      delete data.password;
      await setDoc(aDoccument, data);
      localStorage.setItem('uid', res.user.uid);
      localStorage.setItem('type', data.type);
      this.router.navigateByUrl('/student-dashboard');
      this.common.hideLoader();
    } catch (err) {
      console.log(err);
      this.common.showError('Email Already in use');
      this.common.hideLoader();
    }
  }

  async studentLogin(loginData: any) {
    try {
      let res = await signInWithEmailAndPassword(
        this.auth,
        loginData.email,
        loginData.password
      );
      const aDoccument = doc(this.firestore, `users/${res.user.uid}`);
      const userdoc = await getDoc(aDoccument);
      let data: any = userdoc.data();
      localStorage.setItem('uid', res.user.uid);
      localStorage.setItem('type', data.type);
      if(localStorage.getItem('type') == 'student'){
        this.router.navigateByUrl('/student-dashboard');
      }
      else{
        this.companyService.getMyInternships().subscribe(res =>
          {
if(res.length == 0){
  this.router.navigateByUrl('/company-dashboard/create-internship');
}
else{
  this.router.navigateByUrl('/company-dashboard');
}
          })
      
      }
      return true;
    } catch (err: any) {
      this.common.showError('Invalid Login Credentials');
      throw {
        message: err.error ?? 'Account does not exist with given credentials',
      };
    }
  }

  async companyLogin(loginData: any) {
    try {
      let res = await signInWithEmailAndPassword(
        this.auth,
        loginData.email,
        loginData.password
      );
      const aDoccument = doc(this.firestore, `users/${res.user.uid}`);
      const userdoc = await getDoc(aDoccument);
      let data: any = userdoc.data();
      localStorage.setItem('uid', res.user.uid);
      localStorage.setItem('type', data.type);
      return true;
    } catch (err: any) {
      throw {
        message: err.error ?? 'Account does not exist with given credentials',
      };
    }
  } 

  isAuthenticated() {
    return localStorage.getItem('uid');
  }
  isType() {
    return localStorage.getItem('type');
  }
  getUid(){
   return localStorage.getItem('uid');
  }
  async logout() {
    await signOut(this.auth);
    if (localStorage.getItem('type') == 'company') {
      localStorage.clear()
      this.router.navigateByUrl('/home');
    } else {
      localStorage.clear()
      this.router.navigateByUrl('/home');
    }
  }

  get profileData() {
    return this.userData;
  }
  async getProfileData(){
    let uid = this.getUid();
    const aDoccument = doc(this.firestore, `users/${uid}`);
    let item = (await getDoc(aDoccument)).data();
    return item;
  }

  async forgetPassword(data: any) {
    try {
      let res = await sendPasswordResetEmail(this.auth, data.email);

      return true;
    } catch (err: any) {
      this.common.showError('Invalid Email')
      throw {
        message: err.message,
      };
    }
  }
}
