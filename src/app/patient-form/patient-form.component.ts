import { AfterViewInit, Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Patient } from '../model/Patient';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-patient-form',
  templateUrl: './patient-form.component.html',
  styleUrls: ['./patient-form.component.css']
})
export class PatientFormComponent implements AfterViewInit {

  public currentPatient?: Patient;

  patientForm = new FormGroup({
    id: new FormControl(''),
    //identifier: new FormArray([]) ,
    //name: new FormArray([this.createHumanNameFormGroup(1,1,1)]), // todo create name formgroup
    text: new FormControl(''),
    active: new FormControl(true),
    //gender: new FormControl<Gender>("unknown"),
    birthDate: new FormControl(''),
    //telecom: new FormArray([this.createTelecomFormGroup()]),
    deceasedBoolean: new FormControl(false),
    deceasedDateTime: new FormControl(null as Date | null),
    address: new FormArray([this.createAddressFormGroup()]),
  });

  createAddressFormGroup() {
    return new FormGroup({
      city: new FormControl(''),
      postalcode: new FormControl(''),
    });
  }
  hasUnitNumber = false;


  constructor(private fb: FormBuilder, private route: ActivatedRoute, private patientService: PatientService) {}


  ngAfterViewInit(): void {
    this.route.params.subscribe(params => {
      const patientId = params['id'];

      this.patientService.getPatientById(patientId).subscribe(patient => {

        console.log(patient);


        this.currentPatient = patient;
        this.patientForm.patchValue(this.currentPatient);
      });

    });
  }

  onSubmit(): void {
    alert('Thanks!');
  }
}
