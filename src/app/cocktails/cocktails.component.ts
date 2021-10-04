import { Component, OnInit } from '@angular/core';
import { COCKTAILS } from '../mock-cocktails';

@Component({
  selector: 'app-cocktails',
  templateUrl: './cocktails.component.html',
  styleUrls: ['./cocktails.component.css']
})
export class CocktailsComponent implements OnInit {

  constructor() { }
  cocktails = COCKTAILS;
  ngOnInit(): void {
  }

}
