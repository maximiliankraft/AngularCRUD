import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-patient-form',
  templateUrl: './patient-form.component.html',
  styleUrls: ['./patient-form.component.css']
})
export class PatientFormComponent implements AfterViewInit {
  addressForm = this.fb.group({
    company: null,
    firstName: [null, Validators.required],
    lastName: [null, Validators.required],
    address: [null, Validators.required],
    address2: null,
    city: [null, Validators.required],
    state: [null, Validators.required],
    postalCode: [null, Validators.compose([
      Validators.required, Validators.minLength(5), Validators.maxLength(5)])
    ],
    shipping: ['free', Validators.required]
  });

  hasUnitNumber = false;


  constructor(private fb: FormBuilder, private route: ActivatedRoute, private patientService: PatientService) {}



  ngAfterViewInit(): void {
    

    this.route.params.subscribe((params: Params) => {
      

      const patientId =  params['id'];

      this.patientService.getPatientById(patientId).subscribe(patient => {
        console.log("Incoming patient data");
        console.log(patient);
        
        
      });
    });
  }

  onSubmit(): void {
    alert('Thanks!');
  }
}
