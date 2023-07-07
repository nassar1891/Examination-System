import { Component, OnInit } from '@angular/core';
import { RegisterService } from './Services/register.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Project';
  constructor(private service: RegisterService) {}

  getUserData() {
    this.service.getRole().subscribe((response) => {
      this.service.user.next(response);
    });
  }

  ngOnInit(): void {
    this.getUserData();
  }
}
