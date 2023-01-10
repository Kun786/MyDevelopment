import { ClientFormService } from './../../../shared/services/client-form.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public formModel: FormGroup | any;
  public showResponse: boolean = false;
  public showSpinner: boolean = false;
  public responseMessage: any;
  constructor(
    private readonly FormBuilder: FormBuilder,
    private readonly ClientFormService:ClientFormService
  ) {
    this.formInitialization();
  }

  ngOnInit(): void {
  }

  public formInitialization() {
    this.formModel = this.FormBuilder.group({
      firstName: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z ]*$/)]),
      countrycode: new FormControl('+44'),
      phone: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(11), Validators.maxLength(11)]),
      emailAddress: new FormControl('', [Validators.required, Validators.email]),
      subject: new FormControl('', [Validators.required, Validators.maxLength(20)]),
      message: new FormControl('', [Validators.required, Validators.maxLength(500)])
    })
  }

  public submitForm() {
    this.showSpinner = true;
    const formValues = this.formModel.value;
    formValues.phone = formValues.countrycode+formValues.phone;
    this.ClientFormService.submitClientQuery(formValues).subscribe((response:any) => {
        this.showResponse = true;
        this.showSpinner = false;
        this.responseMessage = response.message;
    })
    this.formModel.reset();
    setTimeout(() => {
      this.showResponse = false;
    }, 5000);
  }

}
