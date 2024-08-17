import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'base-tab',
  standalone: true,
  imports: [MatIconModule, CommonModule, RouterModule],
  templateUrl: './tab.component.html',
  styleUrl: './tab.component.css',
})
export class TabComponent {
  @Input() title: string = '';
  @Input() link: string = '';
  @Input() icon: string = '';
  @Input() classIcon: string = '';
  @Input() classContainer: string = '';

  get iconClass() {
    return `${this.classIcon}`;
  }
  get containerClass() {
    return `${this.classContainer} p-4 flex gap-3 items-center cursor-pointer w-full`;
  }
}
