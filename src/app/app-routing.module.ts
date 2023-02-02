import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientFormComponent } from './patient-form/patient-form.component';
import { PatientTableComponent } from './patient-table/patient-table.component';

const routes: Routes = [
  {component: PatientTableComponent, path: "patienttable"},
  {component: PatientFormComponent, path: "patient/edit/:id"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
