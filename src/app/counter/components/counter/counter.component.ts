import { Component } from "@angular/core";

@Component({
  selector: 'app-counter',
  template:`
    <h3>counter = {{counter}}</h3>
    <button (click)="increaseBy(2)">+1</button>
    <button (click)="resetBy()">Reset</button>
    <button (click)="increaseBy(-1)">-1</button>
  `
})

export class Countercomponent{
  public counter = 10;

  increaseBy(value:number):void{
    this.counter +=value;
  }
  resetBy():void{
   this.counter = 10;
  }
}
