import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'base-input',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css',
})
export class InputComponent {
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() type: string = 'text';
  @Input() IsformControl: boolean = true;
  @Input() classInput: string = '';
  @Input() defaultValue: string = '';
  get isForm(): boolean {
    return this.IsformControl;
  }
  get classInputStyle(): string {
    return `border outline-none rounded-lg px-2 py-3 w-[90%] ${this.classInput}`;
  }
  ngOnInit() {
    if (!this.IsformControl) {
      console.log(this.IsformControl);
    }
  }
}
