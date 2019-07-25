import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, AbstractControl } from '@angular/forms';
@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {
  demoform: FormGroup;
  constructor(private fb: FormBuilder) { }
  ngOnInit() {
    this.demoform = this.fb.group({
      user_name:[''],
      email:this.fb.array([
        this.fb.control(null)
      ]),
      mobile:[''],
      choice:[''],
      subscribe:['']
    })
  }
  showRemoveBtn = false;
  addEmail(): void {
    (this.demoform.get('email') as FormArray).push(
      this.fb.control(null)
    );
    this.showRemoveBtn = true;
  }
  getEmailsFormControls(): AbstractControl[] {
    return (<FormArray> this.demoform.get('email')).controls
  }
  removeEmail(index) {
    if(index == 0){
      this.showRemoveBtn = false;
          alert("One Email Field is Requird..");
          
    }else{
      (this.demoform.get('email') as FormArray).removeAt(index);
    }
  }
//   public personList = [
//   {
//     "name":"Ashu",
//     "gender":"male",
//     "id":"v1"
//   },
//   {
//     "name":"Vishal",
//     "gender":"male",
//     "id":"v2"
//   },
//   {
//     "name":"Priya",
//     "gender":"Female",
//     "id":"v3"
//   },
//   {
//     "name":"Ratnesh",
//     "gender":"male",
//     "id":"v4"
//   }
//  ]
    onSubmit(){
        console.log(this.demoform.value);
    }
}
