import { Injectable, inject } from '@angular/core';
import {
  Firestore,
  collection,
  collectionData,
  doc,
  getDoc,
  query,
  updateDoc,
  where,
} from '@angular/fire/firestore';
import { addDoc } from 'firebase/firestore';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  firestore: Firestore = inject(Firestore);
  constructor() {}

  getAllInternships() {
    const aCollection = collection(this.firestore, 'internships');
    return collectionData(aCollection, { idField: 'id' });
  }

  getMyAppliedInternships() {
    const aCollection = collection(this.firestore, `applied`);
    const q = query(
      aCollection,
      where('student.id', '==', localStorage.getItem('uid'))
    );
    return collectionData(q, { idField: 'id' });
  }

  async applyForInternship(internship_id) {
    const aStudent = doc(
      this.firestore,
      `users/${localStorage.getItem('uid')}`
    );
    const studentDoc = await getDoc(aStudent);
    let student: any = { ...studentDoc.data(), ...{ id: studentDoc.id } };

    const aInternship = doc(this.firestore, `internships/${internship_id}`);
    const internshipDoc = await getDoc(aInternship);
    let internship: any = { ...internshipDoc.data(), id: internshipDoc.id };

    const aCompany = doc(this.firestore, `user/${internship.company_uid}`);
    const companyDoc = await getDoc(aCompany);
    let company: any = { ...companyDoc.data(), id: companyDoc.id };

    const aCollection = collection(this.firestore, `applied`);
  let status = {
    status: 'applied'
  }
    return addDoc(aCollection, { student, company, internship,status });
  }

  updateProfile(data) {
    const aDoc = doc(
      this.firestore,
      `internships/${localStorage.getItem('uid')}`
    );
    return updateDoc(aDoc, data);
  }
}
