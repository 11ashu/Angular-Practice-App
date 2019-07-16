import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  @ViewChildren("interview") panes : QueryList<any>;
  cList = [
    {"id":"1","name":"box1"},
    {"id":"2","name":"box2"},
    {"id":"3","name":"box3"},
    {"id":"4","name":"box4"},
    {"id":"5","name":"box5"},
    {"id":"6","name":"box6"},
    {"id":"7","name":"box7"},
    {"id":"8","name":"box8"},
    {"id":"9","name":"box9"},
    {"id":"10","name":"box10"}
  ]
  ngOnInit() {
    
  }
  
  ngAfterViewInit(){
        this.panes.forEach((ashu, index) => {
          if(index+1 == 3 || index+1 == 6 || index+1 == 9){
            ashu.nativeElement.checked = true;
          }
        });
        // this.panes.forEach((pan, index) => {
        //   if((index+1 % 3) === 0){
        //     pan.nativeElement.checked = true;
        //   }
        // });
  }
}
