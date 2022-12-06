import { Component } from '@angular/core';
import { NavbarService } from '../../services/navbar.service';
import { NavbarItem } from '../../interface/navbar-item';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  navbarItems: NavbarItem[] = [];
  constructor(private navbarService: NavbarService) {
    navbarService.getData().subscribe((res) => {
      console.log(res.links);

      this.navbarItems = res.links as Array<NavbarItem>;
    });
  }
}
