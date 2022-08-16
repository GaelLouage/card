import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Card } from './models/card';

@Injectable({
  providedIn: 'root'
})
export class CardService {
public cardList:Card[]= [] as Card[];
readonly url="";
  constructor() { }
  cardPost(card:Card) {
    return this.cardList.push(card);
  }
}
