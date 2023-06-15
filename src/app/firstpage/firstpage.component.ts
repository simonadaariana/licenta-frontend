import { Component } from '@angular/core'
import { Router } from '@angular/router';
import { SecondpageComponent } from '../secondpage/secondpage.component';

@Component({
  selector: 'app-firstpage',
  templateUrl: 'firstpage.component.html',
  styleUrls: ['firstpage.component.css'],
})
export class FirstpageComponent {
  constructor(private router: Router) {}
  
  moveToNextPage(){
    this.router.navigateByUrl("secondpage")
  }
}
