import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';
@Component({
  selector: 'base-button',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    CommonModule,
    CardComponent,
  ],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  @Input() label: string = '';
  @Input() disabled: boolean = false;
  @Input() icon: string = '';
  @Input() customClass: string = '';
  @Input() type: string = 'primary';
  @Output() buttonClick = new EventEmitter<void>();

  get buttonClass(): string {
    return `${this.customClass} flex ${
      this.type === 'primary' && 'bg-blue-500'
    } ${this.type === 'danger' && 'bg-red-500'} ${
      this.type === 'success' && 'bg-green-500'
    } text-white gap-1 p-2 rounded-xl items-center`;
  }
  onClick() {
    this.buttonClick.emit();
  }
}
