import { Injectable, inject } from '@angular/core';
import {
  Firestore,
  addDoc,
  collection,
  collectionData,
  doc,
  query,
  updateDoc,
  where,
} from '@angular/fire/firestore';
import { deleteDoc, getDoc } from 'firebase/firestore';

@Injectable({
  providedIn: 'root',
})
export class CompanyService {
  firestore: Firestore = inject(Firestore);
  constructor() {}

  addInternship(data) {
    data.company_uid = localStorage.getItem('uid');
    const aCollection = collection(this.firestore, 'internships');
    return addDoc(aCollection, data);
  }

  getAllInternships() {
    const aCollection = collection(this.firestore, 'internships');
    return collectionData(aCollection, { idField: 'id' });
  }
 async getSingleInternships(id:any){
    const aDoccument = doc(this.firestore, `internships/${id}`);
    let item = (await getDoc(aDoccument)).data();
    return item;
  }
  getMyInternships() {
    const aCollection = collection(this.firestore, 'internships');
    const q = query(
      aCollection,
      where('company_uid', '==', localStorage.getItem('uid'))
    );
    return collectionData(q, { idField: 'id' });
  }

  updateInternship(id, data) {
    const aDoc = doc(this.firestore, `internships/${id}`);
    return updateDoc(aDoc, data);
  }
  deleteIntership(id: any) {
    const aDoccument = doc(this.firestore, `internships/${id}`);
    return deleteDoc(aDoccument);
  }

  getStudentsApplied(internshipId: any) {
    const aCollection = collection(this.firestore, `applied`);
    const q = query(aCollection, where('internship.id', '==', internshipId));
    return collectionData(q, { idField: 'id' });
  }

  updateProfile(data) {
    const aDoc = doc(
      this.firestore,
      `users/${localStorage.getItem('uid')}`
    );
    return updateDoc(aDoc, data);
  }
}
