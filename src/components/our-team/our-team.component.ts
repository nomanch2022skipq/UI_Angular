import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTwitter,  faFacebookF, faInstagramSquare } from '@fortawesome/free-brands-svg-icons';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-our-team',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './our-team.component.html',
  styleUrl: './our-team.component.css'
})
export class OurTeamComponent {

  constructor(public sharedService: SharedService){

  }

  faFacebook = faFacebookF;
  faInstagram = faInstagramSquare;
  faTwitter = faTwitter;

  teams: any = [{
      name: 'John Doe',
      position: 'Team Lead',
      description: 'John Doe is a talented and hardworking individual who is passionate about his work. He is a natural leader and has a strong work ethic.',
      image: 'https://static.vecteezy.com/system/resources/thumbnails/037/098/807/small_2x/ai-generated-a-happy-smiling-professional-man-light-blurry-office-background-closeup-view-photo.jpg'
    },
    {
      name: 'Jane Smith',
      position: 'Software Engineer',
      description: 'Jane Smith is a creative and detail-oriented individual who loves to solve complex problems. She is a quick learner and has a great ability to adapt to new situations.',
      image: 'https://media.istockphoto.com/id/1399565382/photo/young-happy-mixed-race-businessman-standing-with-his-arms-crossed-working-alone-in-an-office.jpg?s=612x612&w=0&k=20&c=buXwOYjA_tjt2O3-kcSKqkTp2lxKWJJ_Ttx2PhYe3VM='
    },
    {
      name: 'Jane Smith',
      position: 'Software Engineer',
      description: 'Jane Smith is a creative and detail-oriented individual who loves to solve complex problems. She is a quick learner and has a great ability to adapt to new situations.',
      image: 'https://media.istockphoto.com/id/1399565382/photo/young-happy-mixed-race-businessman-standing-with-his-arms-crossed-working-alone-in-an-office.jpg?s=612x612&w=0&k=20&c=buXwOYjA_tjt2O3-kcSKqkTp2lxKWJJ_Ttx2PhYe3VM='
    },
    {
      name: 'Jane Smith',
      position: 'Software Engineer',
      description: 'Jane Smith is a creative and detail-oriented individual who loves to solve complex problems. She is a quick learner and has a great ability to adapt to new situations.',
      image: 'https://media.istockphoto.com/id/1399565382/photo/young-happy-mixed-race-businessman-standing-with-his-arms-crossed-working-alone-in-an-office.jpg?s=612x612&w=0&k=20&c=buXwOYjA_tjt2O3-kcSKqkTp2lxKWJJ_Ttx2PhYe3VM='
    }
    ,{
      name: 'Jane Smith',
      position: 'Software Engineer',
      description: 'Jane Smith is a creative and detail-oriented individual who loves to solve complex problems. She is a quick learner and has a great ability to adapt to new situations.',
      image: 'https://media.istockphoto.com/id/1399565382/photo/young-happy-mixed-race-businessman-standing-with-his-arms-crossed-working-alone-in-an-office.jpg?s=612x612&w=0&k=20&c=buXwOYjA_tjt2O3-kcSKqkTp2lxKWJJ_Ttx2PhYe3VM='
    },
]
}
