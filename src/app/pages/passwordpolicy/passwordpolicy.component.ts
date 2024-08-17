import { Component } from '@angular/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { ButtonComponent } from '../../component/button/button.component';
import { InputComponent } from '../../component/input/input.component';

@Component({
  selector: 'app-passwordpolicy',
  standalone: true,
  imports: [
    ButtonComponent,
    InputComponent,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatRadioModule,
  ],
  templateUrl: './passwordpolicy.component.html',
  styleUrl: './passwordpolicy.component.css',
})
export class PasswordpolicyComponent {
  constructor(private location: Location) {}
  defaultValue = new FormControl('red');
  backRouter() {
    this.location.back();
  }
}
