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

  getStudentsApplied(internshipId: any) {
    const aCollection = collection(this.firestore, `applied`);
    const q = query(aCollection, where('internship_id', '==', internshipId));
    return collectionData(q, { idField: 'id' });
  }

  updateProfile(data) {
    const aDoc = doc(
      this.firestore,
      `internships/${localStorage.getItem('uid')}`
    );
    return updateDoc(aDoc, data);
  }
}
