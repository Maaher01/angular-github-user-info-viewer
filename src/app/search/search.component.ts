import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search-component',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  username: string=""
  response: any
  constructor(private http: HttpClient) { }

  search() {
    this.http.get('https://api.github.com/users/' + this.username)
    .subscribe((response) => {
      this.response = response;
    })
  }

}
