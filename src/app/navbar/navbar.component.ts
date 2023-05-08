import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  sideMenu = false

  menu(e: Event) {
    this.sideMenu = !this.sideMenu
  }

}
