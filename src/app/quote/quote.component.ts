import { Component, OnInit } from '@angular/core';
import { Quote} from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[] = [
    
  ];
  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  addNewQuote(quote){
   let quoteLength = this.quotes.length;
   quote.id = quoteLength+1;
   quote.completeDate = new Date(quote.completeDate)
   this.quotes.push(quote)
 }

 deleteQuote(isDelete, index){
   if (isDelete) {
     let toDelete = confirm(` delete ${this.quotes[index].name}?`)
 
     if (toDelete){
       this.quotes.splice(index,1)
     }
   }
 }
   constructor() { }
 
   ngOnInit() {
   }
 
 }
