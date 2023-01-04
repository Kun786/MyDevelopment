import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientFormService } from 'src/app/shared/services/client-form.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  public formModel: FormGroup | any;

  constructor(
    private _ActivatedRoute:ActivatedRoute, 
    private _Router:Router,
    private readonly ClientFormService:ClientFormService,
    private readonly FormBuilder:FormBuilder
    ) { 
      this.formInitialization();
    }

  ngOnInit(): void {
    this._ActivatedRoute.fragment.subscribe((fragment:any) => {
        this._Router.navigateByUrl(`/contact#${fragment}`);
      })
  }

  public formInitialization() {
    this.formModel = this.FormBuilder.group({
      firstName: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z ]*$/)]),
      countrycode: new FormControl('+44'),
      phone: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(10), Validators.maxLength(10)]),
      emailAddress: new FormControl('', [Validators.required, Validators.email]),
      subject: new FormControl('', [Validators.required, Validators.maxLength(20)]),
      message: new FormControl('', [Validators.required, Validators.maxLength(500)])
    })
  }

  public submitForm() {
    const formValues = this.formModel.value;
    formValues.phone = formValues.countrycode+formValues.phone;
  }


}
