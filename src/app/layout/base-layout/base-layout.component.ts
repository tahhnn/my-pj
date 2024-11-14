import { Component } from '@angular/core';
import { HeaderComponent } from '../../component/header/header.component';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from '../../component/sidebar/sidebar.component';

@Component({
  selector: 'app-base-layout',
  standalone: true,
  imports: [HeaderComponent, RouterModule, SidebarComponent],
  templateUrl: './base-layout.component.html',
  styleUrl: './base-layout.component.css',
})
export class BaseLayoutComponent {}
