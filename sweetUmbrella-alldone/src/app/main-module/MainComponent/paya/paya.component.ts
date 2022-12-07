import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paya',
  templateUrl: './paya.component.html',
  styleUrls: ['./paya.component.css']
})
export class PayaComponent implements OnInit {

  constructor(private _Router:Router, private _ViewPortScroller:ViewportScroller) { }

  ngOnInit(): void {
  }

}
