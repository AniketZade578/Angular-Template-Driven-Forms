import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  Register(regForm:any){
    debugger;
    var firstname=regForm.cotrols.firstname.value;
    var lastname=regForm.cotrols.lastname.value;
    var email=regForm.cotrols.email.value;
    console.log(regForm);
  }

}
