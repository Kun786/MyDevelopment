import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  constructor(private _ActivatedRoute:ActivatedRoute, private _Router:Router) { }

  ngOnInit(): void {
    this._ActivatedRoute.fragment.subscribe((fragment:any) => {
      this._Router.navigateByUrl(`/about#${fragment}`);
    })
  }
  scroll(el:HTMLElement){
    el.scrollIntoView();
  }
}
