import { Component, HostListener, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatRadioModule } from '@angular/material/radio';
import { ButtonComponent } from '../../../component/button/button.component';
import { InputComponent } from '../../../component/input/input.component';
import { FormComponent } from '../../../component/form/form.component';

@Component({
  selector: 'app-form-create',
  standalone: true,
  imports: [ButtonComponent, InputComponent, MatRadioModule, FormComponent],
  templateUrl: './form-create.component.html',
  styleUrl: './form-create.component.css',
})
export class FormCreateComponent {
  constructor(
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
  @HostListener('click', ['$event']) onClick(e: any): void {
    if (e.target.classList.contains('close')) {
      this.dialogRef.close();
    }
  }
  close(e: any): any {
    e.preventDefault();
    this.dialogRef.close();
  }
}
