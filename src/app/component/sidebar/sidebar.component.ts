import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { TabComponent } from '../tab/tab.component';

const tabsSource = [
  { title: 'Dashboard', icon: 'home', link: 'analytics' },
  { title: 'Sensor', icon: 'computer', link: '#1' },
  { title: 'Watchlist', icon: 'error', link: '#2' },
  { title: 'Lisence', icon: 'error', link: '#3' },
  { title: 'Threads Feed', icon: 'filter_list', link: '#4' },
  { title: 'Alert', icon: 'alarm', link: '#5' },
  {
    title: 'User Manager',
    icon: 'supervisor_account',
    link: 'product-manager',
  },
];

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [TabComponent, CommonModule, MatDividerModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  constructor(public router: Router) {}
  tabs = tabsSource;
  routerSubscription!: Subscription;
  activeTabLink: string = '';

  ngOnInit() {
    this.activeTabLink = this.router.url;
    this.routerSubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.activeTabLink = this.router.url;
      }
    });
  }

  setActive(tabLink: string): void {
    this.activeTabLink = tabLink;
  }

  isActive(tabLink: string): boolean {
    return (
      this.activeTabLink === tabLink || this.router.url.startsWith(tabLink)
    );
  }

  ngOnDestroy() {
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }
}
