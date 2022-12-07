import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  constructor(private _ActivatedRoute:ActivatedRoute, private _Router:Router) { }

  ngOnInit(): void {
    this._ActivatedRoute.fragment.subscribe((fragment:any) => {
        this._Router.navigateByUrl(`/contact#${fragment}`);
      })
  }

}
