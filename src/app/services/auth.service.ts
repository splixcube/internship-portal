import { Injectable, inject } from '@angular/core';
import { CommonService } from './common.service';
import { Firestore, getDoc } from '@angular/fire/firestore';
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from '@angular/fire/auth';
import { doc } from 'firebase/firestore';
import { setDoc } from 'firebase/firestore/lite';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  firestore: Firestore = inject(Firestore);
  auth: Auth = inject(Auth);
  constructor(public common: CommonService, public router: Router) {}

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
      await setDoc(aDoccument, data);
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
      await setDoc(aDoccument, data);
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
        loginData.username,
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

  async companyLogin(loginData: any) {
    try {
      let res = await signInWithEmailAndPassword(
        this.auth,
        loginData.username,
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

  async logout() {
    await signOut(this.auth);
    if (localStorage.getItem('type') == 'company') {
      this.router.navigateByUrl('/auth/company-signin');
    } else {
      this.router.navigateByUrl('/auth/student-signin');
    }
  }
}
