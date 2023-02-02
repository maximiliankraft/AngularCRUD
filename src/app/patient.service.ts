import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Patient } from './model/Patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {


  getPatientById(patientId: string) {
    return this.http.get<Patient>("http://localhost:8080/api/patient/"+patientId);
  }

  constructor(private http: HttpClient) { }

  getAllPatients(){
    return this.http.get<Patient[]>("http://localhost:8080/api/patient/");
  }

}
