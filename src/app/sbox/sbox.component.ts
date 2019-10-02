import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-sbox',
  templateUrl: './sbox.component.html',
  styleUrls: ['./sbox.component.css']
})
export class SboxComponent implements OnInit {

  mygroup:FormGroup;

  myOptions = [
    {id: 1, age: "18-25"},
    {id: 2, age: "26-35"},
    {id: 3, age: "35 & above"},
    ];

  constructor() { 
    console.log(this.mygroup)
  }

  ngOnInit() {
    this.mygroup = new FormGroup({
      username: new FormControl('', [Validators.required,Validators.minLength(3),Validators.maxLength(8)]),
      email: new FormControl('',[Validators.required,Validators.minLength(3)]),
      passsword: new FormControl('', [Validators.required,Validators.minLength(3)]),
      cpasssword: new FormControl('', [Validators.required,Validators.minLength(3)]),

      });
  }

}
