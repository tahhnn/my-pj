import { Component } from '@angular/core';
import { BaseLayoutComponent } from '../../layout/base-layout/base-layout.component';
import { MatSelectModule } from '@angular/material/select';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { Route, Router } from '@angular/router';
import { FormUpdateComponent } from '../modal/form-update/form-update.component';
import { FormCreateComponent } from '../modal/form-create/form-create.component';
import { ButtonComponent } from '../../component/button/button.component';
import { InputComponent } from '../../component/input/input.component';
import { AlertComponent } from '../../component/alert/alert.component';

export interface PeriodicElement {
  ID: any;
  email: string;
  role: string;
  name: string;
  action: any;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { ID: 1, email: 'thanhbc6@fpt.com', role: 'Admin', name: '', action: '' },
];
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    BaseLayoutComponent,
    ButtonComponent,
    InputComponent,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  defaultValue = new FormControl('red');
  displayedColumns: string[] = ['ID', 'email', 'role', 'name', 'action'];
  dataSource = ELEMENT_DATA;
  count = ELEMENT_DATA.length;
  constructor(public dialog: MatDialog, public router: Router) {}
  openDialogUpdate(): void {
    const dialogRef = this.dialog.open(FormUpdateComponent, {
      width: '600px',
      height: '600px',
      data: [],
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
  openDialogCreate(): void {
    const dialogRef = this.dialog.open(FormCreateComponent, {
      width: '600px',
      height: '750px',
      data: [],
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
  alertDelete(): void {
    const dialogRef = this.dialog.open(AlertComponent, {
      width: '500px',
      height: '230px',
      data: [],
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
  redirectTo() {
    this.router.navigate(['product-manager/policy-password']);
  }
}
