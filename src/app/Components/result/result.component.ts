import { Component, OnInit } from '@angular/core';
import { RegisterService } from 'src/app/Services/register.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css'],
})
export class ResultComponent implements OnInit {
  score: any = 0;
  showImg: boolean = false;

  constructor(private servive: RegisterService) {
    if (this.score > 3) {
      this.showImg = true;
    }
    console.log(this.showImg);
    console.log(this.score);
  }

  ngOnInit(): void {
    this.getScore();
    this.getImg();
  }

  getScore() {
    this.servive.score.subscribe((res) => {
      this.score = res;
    });
  }
  getImg() {
    if (this.score > 3) {
      this.showImg = true;
    }
    console.log(this.score);
    console.log(this.showImg);
  }
}
