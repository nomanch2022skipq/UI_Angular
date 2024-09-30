import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { HomeHeroSectionComponent } from '../components/home-hero-section/home-hero-section.component';
import { OurTeamComponent } from '../components/our-team/our-team.component';
import { FooterComponent } from '../components/footer/footer.component';
import { LoginPageComponent } from '../components/login-page/login-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, HomeHeroSectionComponent, OurTeamComponent, FooterComponent, LoginPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todoApp';
}
