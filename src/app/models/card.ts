import { ExpirationDate } from "./expiration-date";

export class Card {
    _cardHolderName:string = "";
    _cardNumber:string = "";
     _expiration:ExpirationDate = new ExpirationDate();

     
     public get cardHolderName(){
        return this._cardHolderName;
    }
    public set cardHolderName(cardHolderName:string) {
        this._cardHolderName = cardHolderName;
    }

    public get cardNumber(){
        return this._cardNumber;
    }
    public set cardNumber(cardNumber:string) {
        this._cardNumber = cardNumber;
    }

    public get expiration(){
        return this._expiration;
    }
    public set expiration(m:ExpirationDate) {
        this._expiration = m;
    }
}
