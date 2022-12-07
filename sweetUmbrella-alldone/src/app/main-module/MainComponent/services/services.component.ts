import { NgStyle } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  @ViewChild("field") field:ElementRef|any
  @ViewChild('result') result:ElementRef|any

  FormTax:FormGroup|any
  gross:string=''
  
  constructor(private formbuilder:FormBuilder) { 
    this.formModel()
  }

  ngOnInit(): void {
  }
formModel(){
  this.FormTax=this.formbuilder.group({
    calculateTax:new FormControl("")
  })
}

calculate(){
  

  let value=this.FormTax.value
  let number =value;
  let check =parseInt(number.calculateTax) ;
  

  if(number.calculateTax<=12570){
this.gross=number.calculateTax
    alert('no tax');
    this.field.nativeElement.style.border='1px solid red'
    // this.result.nativeElement.style.display='block'   

  }
  else if(number.calculateTax<=50270){
    let constantvalue=number.calculateTax-12570;
  let incomeTax=20*constantvalue/100;
  
  // let nic=6.48*number.calculateTax/100;

    alert(incomeTax);
  }
  else{
    let constantvalue=number.calculateTax-12570;
    let incomeTax40=40*constantvalue/100;

    // let nic=6.48*number.calculateTax/100;
    alert(incomeTax40);

  }
  
  
  
}
}