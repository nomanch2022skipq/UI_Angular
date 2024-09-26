import { Component } from '@angular/core';
import { HomeHeroSectionComponent } from '../home-hero-section/home-hero-section.component';
import { OurTeamComponent } from '../our-team/our-team.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [HomeHeroSectionComponent, OurTeamComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
