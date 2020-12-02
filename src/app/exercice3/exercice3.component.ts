import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice3',
  templateUrl: './exercice3.component.html',
  styleUrls: ['./exercice3.component.css']
})
export class Exercice3Component implements OnInit {

  p2 : string = "p2";

  statut : boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
