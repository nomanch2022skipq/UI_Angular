import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  companySections = [
    {
      title: 'Company',
      links: ['About', 'Careers', 'Brand Center', 'Blog']
    },
    {
      title: 'Support',
      links: ['Help Center', 'Contact Us', 'FAQ', 'Privacy Policy']
    },
    {
      title: 'Resources',
      links: ['Docs', 'Tutorials', 'API', 'Community']
    },
    {
      title: 'Social',
      links: ['Facebook', 'Twitter', 'LinkedIn', 'Instagram']
    }
  ];
}
