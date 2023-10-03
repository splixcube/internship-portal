import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private route: ActivatedRoute, private router: Router) {}
  ngOnInit(): void {
    this.route.fragment.subscribe((fragment: string) => {
      console.log(fragment,"fragment")
      if (fragment) {
        const element = document.getElementById('about');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  }
}
