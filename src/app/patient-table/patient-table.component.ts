import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { Patient } from '../model/Patient';
import { PatientService } from '../patient.service';
import { PatientTableDataSource } from './patient-table-datasource';

@Component({
  selector: 'app-patient-table',
  templateUrl: './patient-table.component.html',
  styleUrls: ['./patient-table.component.css']
})
export class PatientTableComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Patient>;
  dataSource: PatientTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  constructor( private patientService: PatientService ) {
    this.dataSource = new PatientTableDataSource(patientService);
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;

    //this.dataSource.loadPatientTableData();

    this.patientService.getAllPatients().subscribe(patients => {

      this.table.dataSource = patients;
    })

  }

  humanNameToString(patientItem: Patient): string{
    console.log(patientItem);
    
    return patientItem.name.map(
      humanName =>  
      humanName.prefix.join(" ") + humanName.given.join(" ") + " " +humanName.family + " " + humanName.suffix.join(" ") 
      ).join(" // ");
  }

  /*
  apiResponse.map(patientItem => patientItem.name.map(humanName =>  humanName.prefix.join(" ") + humanName.given.join(" ") + " " +humanName.family + " " + humanName.suffix.join(" ") ))
  
  */


}
