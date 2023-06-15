import { Component } from '@angular/core'
import {Router} from "@angular/router";

@Component({
  selector: 'app-secondpage',
  templateUrl: 'secondpage.component.html',
  styleUrls: ['secondpage.component.css'],
})
export class SecondpageComponent {
  constructor(private router: Router) {
  }

  onNextPage() {
    this.router.navigateByUrl("/organizare")
  }
}
