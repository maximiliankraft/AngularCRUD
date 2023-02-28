import { AfterViewInit, Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { PatientService } from '../patient.service';
import {GENDER_OPTIONS} from "../model/Patient";

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
    telecom: new FormGroup({
      use: new FormControl("")
    }),
    active: [true, Validators.required],
    gender: ["", Validators.required],
    address: [null, Validators.required],
    state: [null, Validators.required],
    postalCode: [null, Validators.compose([
      Validators.required, Validators.minLength(5), Validators.maxLength(5)])
    ],
    shipping: ['free', Validators.required]
  });

  hasUnitNumber = false;
  genderOptions: any = GENDER_OPTIONS;

  public createIdentifierFormGroup( formGroupAmount: number = 1 ): FormGroup[]{

    return Array(formGroupAmount).fill(new FormGroup({ // identifier form group
      id: new FormControl(""),
      use: new FormControl(""),
      type: new FormControl(""),
      system: new FormControl(""),
      value: new FormControl(""),
      period: new FormGroup({
        start: new FormControl<Date>(new Date()),
        end: new FormControl<Date>(new Date())
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

  
  public removeTelecom(index: number){}

  onSubmit(): void {
    alert('Thanks!');
  }
}
