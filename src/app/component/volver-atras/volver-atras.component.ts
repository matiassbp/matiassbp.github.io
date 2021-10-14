import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-volver-atras',
  templateUrl: './volver-atras.component.html',
  styleUrls: ['./volver-atras.component.css']
})
export class VolverAtrasComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit(): void {
  }

  goback(){
    this.location.back();
  }

}
