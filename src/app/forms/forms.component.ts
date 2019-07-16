import { Component, OnInit } from '@angular/core';
import { Tdf } from './tdf';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  constructor() { }
  topics = ['Angular', 'Java', 'React'];
  tdfModel = new Tdf('ashu','ashu@gmail.com',9919276988,'Java','',false);
  topicHasError = true;
  ngOnInit() {
  }

  checSelectValue(value){
    if(value == 'default'){
       this.topicHasError = true;
    }else{
      this.topicHasError = false;
    }
  }
  onSubmit(){
   console.log(this.tdfModel);
  }
}
