import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientTableComponent } from './patient-table/patient-table.component';

const routes: Routes = [
  {component: PatientTableComponent, path: "patient/:id"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
