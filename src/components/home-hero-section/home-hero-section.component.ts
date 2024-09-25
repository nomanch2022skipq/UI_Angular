import { Component } from '@angular/core';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-home-hero-section',
  standalone: true,
  imports: [],
  templateUrl: './home-hero-section.component.html',
  styleUrl: './home-hero-section.component.css'
})
export class HomeHeroSectionComponent {
  constructor(public sharedService: SharedService){}
}
