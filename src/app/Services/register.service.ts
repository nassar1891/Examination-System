import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  user = new Subject();
  score = new Subject();
  contact= new Subject();
  url: string = 'http://localhost:3024/';
  constructor(private http: HttpClient) {}
  addUser(user: any) {
    return this.http.post(this.url + 'students', user);
  }
  getUser(username: any) {
    return this.http.get(`${this.url}/s${username}`);
  }
  getAllUsers(type: string) {
    return this.http.get(this.url + type);
  }
  login(model: any) {
    return this.http.put(this.url + 'login/1', model);
  }
  getRole() {
    return this.http.get(this.url + 'login/1');
  }
  getQuestion() {
    return this.http.get(this.url + 'questions');
  }
  setScore(final: any) {
    return this.http.put(this.url + 'Score/1', final);
  }
  
}
