import { Component, HostListener, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatRadioModule } from '@angular/material/radio';
import { InputComponent } from '../../../component/input/input.component';
import { ButtonComponent } from '../../../component/button/button.component';
import { FormComponent } from '../../../component/form/form.component';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ButtonComponent, InputComponent, MatRadioModule, FormComponent],
  templateUrl: './form-update.component.html',
  styleUrl: './form-update.component.css',
})
export class FormUpdateComponent {
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
