import { AfterViewInit, Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-patient-form',
  templateUrl: './patient-form.component.html',
  styleUrls: ['./patient-form.component.css']
})
export class PatientFormComponent implements AfterViewInit {
  patientForm = this.fb.group({
    id: "",
    text: ["", Validators.required],
    identifier: new FormArray( // identifier list
      this.createIdentifierFormGroup(1)
    ),
    active: [true, Validators.required],
    address: [null, Validators.required],
    city: [null, Validators.required],
    state: [null, Validators.required],
    postalCode: [null, Validators.compose([
      Validators.required, Validators.minLength(5), Validators.maxLength(5)])
    ],
    shipping: ['free', Validators.required]
  });

  hasUnitNumber = false;

  public createIdentifierFormGroup( formGroupAmount: number = 1 ): FormGroup[]{

    return Array(formGroupAmount).fill(new FormGroup({ // identifier form group
      id: new FormControl(""),
      use: new FormControl(""),
      type: new FormControl(""),
      system: new FormControl(""),
      value: new FormControl(""),
      period: new FormGroup({
        start: new FormControl(new Date()),
        end: new FormControl(new Date())
      }),
      assigner: new FormControl(""),
    }));
  }

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private patientService: PatientService) {}



  ngAfterViewInit(): void {
    this.route.params.subscribe((params: Params) => {
      const patientId =  params['id'];

      this.patientService.getPatientById(patientId).subscribe(patient => {
        console.log("Incoming patient data");
        console.log(patient);


        this.patientForm.patchValue(patient as any);


      });
    });
  }

  onSubmit(): void {
    alert('Thanks!');
  }
}
