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

  createAddressFormGroup(lineAmount: number = 1) {

    const formControlArr = [];

    for (let i = 0; i < lineAmount; i++){
      formControlArr.push(new FormControl(""));
    }

    return new FormGroup({
      city: new FormControl(''),
      postalcode: new FormControl(''),
      line: new FormArray(formControlArr)
    });
  }
  hasUnitNumber = false;


  constructor(private fb: FormBuilder, private route: ActivatedRoute, private patientService: PatientService) {}


  ngAfterViewInit(): void {
    this.route.params.subscribe(params => {
      const patientId = params['id'];

      this.patientService.getPatientById(patientId).subscribe(patient => {

        console.log(patient);

        console.log(patient)




        this.currentPatient = patient;


        // liste von adress controls leeren
        this.patientForm.controls.address.clear()

        for (let i = 0; i < patient.address.length; i++){
          this.patientForm.controls.address.push(this.createAddressFormGroup(patient.address[i].line.length));
        }

        this.patientForm.patchValue(this.currentPatient as any);
      });

    });
  }



  addString(addr: FormGroup<{ city: FormControl<string | null>; postalcode: FormControl<string | null>; line: FormArray<any> }>) {
    addr.controls.line.push(new FormControl(""));
  }

  removeString(addr: FormGroup<{ city: FormControl<string | null>; postalcode: FormControl<string | null>; line: FormArray<FormControl<string | null>> }>, index: number) {
    addr.controls.line.removeAt(index);
  }
}
