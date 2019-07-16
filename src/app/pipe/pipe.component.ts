import { Component, OnInit } from '@angular/core'
@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public personList = [
  {
    "name":"Ashu",
    "gender":"male",
    "id":"v1"
  },
  {
    "name":"Vishal",
    "gender":"male",
    "id":"v2"
  },
  {
    "name":"Priya",
    "gender":"Female",
    "id":"v3"
  },
  {
    "name":"Ratnesh",
    "gender":"male",
    "id":"v4"
  }
 ]
}
