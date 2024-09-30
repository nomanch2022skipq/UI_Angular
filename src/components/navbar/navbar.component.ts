import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { SharedService } from '../../services/shared.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatIconModule, FontAwesomeModule, CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  faBars = faBars;
  isAuthenticated: boolean = false;

  constructor(public sharedService: SharedService, public apiService: ApiService) {}

  ngOnInit() {
    this.apiService.authStatus$.subscribe(isAuth => {
      this.isAuthenticated = isAuth;
      console.log(this.isAuthenticated); // Debugging
    });
  }

  logout() {
    this.apiService.logout();
  }
}
