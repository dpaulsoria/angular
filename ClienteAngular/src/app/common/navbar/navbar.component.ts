import { Component } from '@angular/core';
import { NavbarItem } from '../../interface/navbar-item';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  navbarItems: NavbarItem[] = [
    {
      name: 'About',
      url: '#about',
      class_a: 'nav-link',
      class_li: 'nav-item',
    },
    {
      name: 'Services',
      url: '#services',
      class_a: 'nav-link',
      class_li: 'nav-item',
    },
    {
      name: 'Portfolio',
      url: '#portfolio',
      class_a: 'nav-link',
      class_li: 'nav-item',
    },
    {
      name: 'Contact',
      url: '#contact',
      class_a: 'nav-link',
      class_li: 'nav-item',
    },
  ];
}
