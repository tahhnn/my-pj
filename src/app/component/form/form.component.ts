import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'base-form',
  standalone: true,
  imports: [ButtonComponent, CommonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  @Input() title: string = '';
  @Input() custom_container_class: string = '';
  @Input() form_class: string = '';
  @Input() title_class: string = '';
  @Input() hasCloseButton: boolean = false;
  @Input() hasCancelButton: boolean = true;
  get formContainerClass(): string {
    return `${this.custom_container_class} p-5 bg-white h-fit`;
  }
  get formClass(): string {
    return `${this.form_class} bg-white`;
  }
  get titleClass(): string {
    return `${this.title_class} font-bold text-3xl`;
  }
}
