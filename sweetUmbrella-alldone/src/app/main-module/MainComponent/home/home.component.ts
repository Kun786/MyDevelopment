import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public formModel: FormGroup | any;

  constructor(
    private readonly FormBuilder:FormBuilder
  ) { 
    this.formInitialization();
  }

  ngOnInit(): void {

  }

  public formInitialization(){
    this.formModel = this.FormBuilder.group({
      firstName:new FormControl('',[Validators.required, Validators.pattern(/^[a-zA-Z ]*$/)]),
      lastName:new FormControl('',[Validators.required, Validators.pattern(/^[a-zA-Z ]*$/)]),
      emailAddress:new FormControl('',[Validators.required, Validators.email]),
      subject:new FormControl('',[Validators.required,Validators.maxLength(20)]),
      message:new FormControl('',[Validators.required,Validators.maxLength(500)])
    })
  }

  public submitForm(){
    const formValues = this.formModel.values;
  }

}
