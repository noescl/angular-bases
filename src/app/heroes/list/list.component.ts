import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})

export class ListComponent {
  public heroNames: string[] = ['Spiderman','IronMan','Hulp','She hulp','Thor'];
  public deleteHero?:string;
  removeLastHero():void{
    this.deleteHero = this.heroNames.pop();
    console.log(this.deleteHero);
  }
}
