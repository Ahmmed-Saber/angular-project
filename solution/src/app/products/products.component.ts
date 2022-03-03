import { Component, OnInit } from '@angular/core';
import { iproduct } from '../sharedclassesandtypes/IProdect';
import { Icategory } from '../sharedclassesandtypes/Icategory';
import {Discountoffers} from '../sharedclassesandtypes/Dissacountoffers';
import { ProductServiceService } from '../service/product-service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(private productService:ProductServiceService){
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
   CategoryList1:string[]=["number","string"]
   ProductList1:string[]=["ID","name","Quantity","Price","Img"]
   isPurchsed=false;
   UserName="";
   fullname:string="ahmed saber";
   productList:any;

   renderValues(){
  
    return this.productList=this.productService.GetAllProducts;
  }


   purshase(){

    this.isPurchsed=true;
 
 
   }
 

  ngOnInit(): void {
  }

}
