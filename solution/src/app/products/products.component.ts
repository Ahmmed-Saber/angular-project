import { Component, OnInit } from '@angular/core';
import { iproduct } from '../sharedclassesandtypes/IProdect';
import { Icategory } from '../sharedclassesandtypes/Icategory';
import {Discountoffers} from '../sharedclassesandtypes/Dissacountoffers';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor() { 
    this.Storename="onlinestore";
    this.StoreLogo="";
    this.ClientName="ahmed saber"
    this.IsPurshased=true;
    this.CategoryList=[];
    this.ProductList=[];
    this.Discount=Discountoffers.d2
    

  }
  Discount:Discountoffers;
   Storename:string;
   StoreLogo:string;
   ProductList:iproduct[];
   ClientName:string;
   IsPurshased:boolean;
   CategoryList:Icategory[];
   

  ngOnInit(): void {
  }

}
