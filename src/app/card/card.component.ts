import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CardService } from '../card.service';
import { Card } from '../models/card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
public cardUser:Card = new Card();
public cardNumber:string ="";
public theYear: string = new Date().toLocaleDateString();
public submit:boolean = false;
public error = {
  color :"red",
  display:"inline"
}

public noError = {
  display:"none"
}
public inputError = {
  border: "1px solid red"
}
public inputNoError = {
  border: "1px  solid hsl(278, 68%, 11%)"
}
  constructor(public cardService:CardService) { }

  ngOnInit(): void {
  }
public getExpiration(exp:string,max:number) {
 
  return exp.toString().length > max-1 && max === 3 ? 
          exp.toString()[0] + exp.toString()[1] + exp.toString()[2] :
           exp.toString().length > max-1 && max === 2 ?
          exp.toString()[0] + exp.toString()[1] :  exp.toString().length == 1 && max === 3 ? `00${exp}` :
           `0${exp}` 
}
public getCardNumber(num:string) {
  return num.substring(0, 4) + " " + num.substring(4, 8) + " " +
  num.substring(8, 12) + " " + num.substring(12, 16);
}
public onSubmit(){

  if(!isNaN(Number(this.cardUser.cardNumber)) && this.cardUser.cardNumber.length == 16 &&
      !isNaN(Number(this.cardUser.expiration.month)) && this.cardUser.expiration.month.length == 2 &&
       Number(this.cardUser.expiration.month) <=12 &&
      !isNaN(Number(this.cardUser.expiration.year)) && this.cardUser.expiration.year.length == 2 &&
      !isNaN(Number(this.cardUser.expiration.cvc)) && this.cardUser.expiration.cvc.length == 3)
     {
       this.cardService.cardPost(this.cardUser);
      this.submit = true; 
     }
     
 
  }
}
