import { Component } from '@angular/core';
import { ProductsComponent } from './products/products.component';
import { ViewChild } from '@angular/core';
import { iproduct } from './sharedclassesandtypes/IProdect';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {

  Products:any;
  constructor(){}
  @ViewChild(ProductsComponent) ViewProductList!:ProductsComponent;
  ngAfterViewInit(): void {
    this.Products=this.ViewProductList.renderValues();
    
  }





  flag:boolean=false;




  DisplayProducts()
  {
  
    if(this.flag==false){
      this.flag=true;
    }
  }
    

  // title = 'solution';
}

