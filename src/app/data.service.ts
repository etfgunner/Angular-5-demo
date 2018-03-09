import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {
 private nizCiljeva=new BehaviorSubject<any>(['Prvobitni cilj', 'Neki drugi cilj']);
 cilj=this.nizCiljeva.asObservable();
  constructor() { }
changeCilj(cilj){
this.nizCiljeva.next(cilj);
}
}
