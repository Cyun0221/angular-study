import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-s1-position',
  templateUrl: './s1-position.component.html',
  styleUrls: ['./s1-position.component.css']
})
export class S1PositionComponent implements OnInit {
  displayStatic = false;
  displayAbsolute = false;
  displayRelative = false;
  displayFixed = false;
  displaySticky = false;

  constructor() { }

  ngOnInit(): void {
  }

  display(e: number): void {
    this.displayStatic = false;
    this.displayAbsolute = false;
    this.displayRelative = false;
    this.displayFixed = false;
    this.displaySticky = false;
    switch (e) {
      case 1:
        this.displayStatic = !this.displayStatic;
        break;
      case 2:
        this.displayAbsolute = !this.displayAbsolute;
        break;
      case 3:
        this.displayRelative = !this.displayRelative;
        break;
      case 4:
        this.displayFixed = !this.displayFixed;
        break;
      case 5:
        this.displaySticky = !this.displaySticky;
        break;
      default:
        this.displayStatic = false;
        this.displayAbsolute = false;
        this.displayRelative = false;
        this.displayFixed = false;
        this.displaySticky = false;
    }
  }
}
