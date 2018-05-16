import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lista Pracowników';
  constructor (private httpService: HttpClient) { }
  employees: string [];
  key: string = 'id'; //default sort by id
  reverse: boolean = false;
  page: number = 1; //1st page is shown by default


  sort(key){
    this.key = key;
    this.reverse = !this.reverse;
  }

  ngOnInit () {
    this.httpService.get('./assets/dane.json').subscribe( //read JSON data
      data => {
        this.employees = data as string [];
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
  }
}
