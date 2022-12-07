import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-start-contracting',
  templateUrl: './start-contracting.component.html',
  styleUrls: ['./start-contracting.component.css']
})
export class StartContractingComponent implements OnInit {

  constructor(private _ActivatedRoute:ActivatedRoute, private _Router:Router) { }

  ngOnInit(): void {
    this._ActivatedRoute.fragment.subscribe((fragment:any) => {
      this._Router.navigateByUrl(`/start#${fragment}`);
    })
  }

}
