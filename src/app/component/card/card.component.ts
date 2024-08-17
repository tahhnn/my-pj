import { MatIconModule } from '@angular/material/icon';
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MatIconModule, CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  @Input() icon: any;
  @Input() classIcon: string = '';
  get iconClass(): string {
    return `${this.classIcon} text-white`;
  }
}
