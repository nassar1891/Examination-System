import { Subject } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { RegisterService } from 'src/app/Services/register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  user!: any;
  constructor(private service: RegisterService, private router: Router) {}

  ngOnInit(): void {
    this.service.user.subscribe((response) => {
      this.user = response;
    });
  }

  logout() {
    let model = {};
    this.service.login(model).subscribe((res) => {
      this.user = null;
      this.service.user.next(res);
      this.router.navigate(['/']);
    });
  }
}
