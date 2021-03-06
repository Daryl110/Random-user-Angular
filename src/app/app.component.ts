import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  API_URL = 'https://randomuser.me/api/?results=50';
  users;

  constructor (private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get(this.API_URL).subscribe((data) => {
      this.users = data;
      this.users = this.users.results;
      console.log(this.users);
    });
  }
}
