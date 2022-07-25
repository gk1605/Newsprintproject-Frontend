import { Component, Inject, Input, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { VegetablesService } from '../vegetables.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {
   service:CartService
   num:number;
  
  
   vegetableService:VegetablesService;
   vegetable:any[]=[];
   


 

  constructor(service1:CartService,service2:VegetablesService) { 
    this.vegetableService=service2;
    this.service=service1;
    this.num = this.service.value;
    this.vegetable=this.vegetableService.vegetables;
    console.log(this.vegetable);
  

   
   
  } 

 

  
  
  


  ngOnInit(): void {
  
  }
 
}
