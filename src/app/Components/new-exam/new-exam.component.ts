import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RegisterService } from 'src/app/Services/register.service';

@Component({
  selector: 'app-new-exam',
  templateUrl: './new-exam.component.html',
  styleUrls: ['./new-exam.component.css'],
})
export class NewExamComponent implements OnInit {
  questions: any[] = [];
  correctAnsers: any[] = [];
  total: number = 0;
  showResult: boolean = false;

  constructor(private service: RegisterService,private router:Router) {}

  ngOnInit(): void {
    this.getQuestions();
    this.getCorrecetAnswers();
  }

  getQuestions() {
    this.service.getQuestion().subscribe((res: any) => {
      this.questions = res;
    });
  }

  getCorrecetAnswers() {
    for (let i = 0; i < this.questions.length; i++) {
      this.correctAnsers[i].push(this.questions[i].correctAnswer);
    }
  }

  getAnswer(event: any) {
    let inputValue = (event.target as HTMLInputElement).value;
    let questionINdex: any = (event.target as HTMLInputElement).name;
    this.questions[questionINdex].studentAnswer = inputValue;
  }

  onSubmit() {
    this.total = 0;
    for (let i in this.questions) {
      if (this.questions[i].studentAnswer == this.questions[i].correctAnswer) {
        this.total++;
      }
      this.showResult = true;
    }
    let Final = {
      score: this.total,
    };
    this.service.setScore(Final).subscribe((res) => {
      this.service.score.next(res);
    });
    this.router.navigate(['/result']);
  }
}
