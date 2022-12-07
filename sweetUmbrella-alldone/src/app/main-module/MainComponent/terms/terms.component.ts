import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.css']
})
export class TermsComponent implements OnInit {

  getFragment:any;
  constructor(private _ActivatedRoute:ActivatedRoute, private _Router:Router) { }

  ngOnInit(): void {
    // this._ActivatedRoute.fragment.subscribe((fragment:any) => {
    //   this._Router.navigateByUrl(`/terms#${fragment}`);
    // })
  }

}
