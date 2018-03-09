import { Component, OnInit } from '@angular/core';
import{ trigger, style, transition, animate, keyframes, query, stagger} from '@angular/animations';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('nizCiljeva',[
      transition('* =>*', [
        query(':enter', style ({opacity: 0, }), {optional: true}),
        
        query(':enter',stagger('300ms', 
      [
        animate('.6s ease-in',keyframes([
          style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
          style({opacity: .5, transform: 'translateZ(50px)', offset: .3}),
          style({opacity: 1, transform: 'translateX(0)', offset: 1})
        ]))]),{optional: true}),

        query(':leave',stagger('300ms', 
        [
          animate('.6s ease-in',keyframes([
            style({opacity: 1, transform: 'translateY(0)', offset: 0}),
            style({opacity: .5, transform: 'translateZ(50px)', offset: .3}),
            style({opacity: 0, transform: 'translateX(-75%)', offset: 1})
          ]))]),{optional: true})

      ])
    ])
  ]
})
export class HomeComponent implements OnInit {
itemCount: number;
btnText: string="Add an item";
tekst: string="Neki tekst za data binding";
nizCiljeva = ["Blah", "blah","blaah"];
  constructor(private _data: DataService) { }

  ngOnInit() {
    this.itemCount=this.nizCiljeva.length;
    this._data.cilj.subscribe(res=>this.nizCiljeva=res);
    this._data.changeCilj(this.nizCiljeva);
  }

  radiNesto(){
    this.nizCiljeva.push(this.tekst);
    this.tekst='';
    this.itemCount++;
    this._data.changeCilj(this.nizCiljeva);
    
  }
  izbrisiElement(i){
    this.nizCiljeva.splice(i,1);
    this.itemCount--;
    this._data.changeCilj(this.nizCiljeva);    
  }

}
