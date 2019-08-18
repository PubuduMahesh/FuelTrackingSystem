import {Component,OnInit} from '@angular/core';

import {IProduct} from './product';
import {ProductService} from './product.service';

@Component({
	templateUrl: './product-list.component.html',
	styleUrls:['./product-list.component.css']
})

export class ProductListComponent implements OnInit{
	pageTitle: string = 'Product List';
	imageWidth: number = 50;
	imageMargin: number = 2;
	showImage: boolean = false;
	errorMessage: string;
	
	filteredProductList: IProduct[] = [];

	constructor(private productService:ProductService){		
		
	}

	_listFilter: string;
	get listFilter():string{
		return this._listFilter;
	}

	set listFilter(item:string){
		this._listFilter = item;
		this.filteredProductList = this._listFilter ? this.performFilter(this._listFilter):this.products;
 	}

	products: IProduct[]=[];

  performFilter(filterBy:string): IProduct[]{
  	filterBy = filterBy.toLowerCase();
  	return this.products.filter((product:IProduct)=>product.productName.toLowerCase().indexOf(filterBy) !== -1);
  }

  toggleImage(): void {
  	this.showImage = !this.showImage;
  }

  ngOnInit(): void{
  	this.productService.getProducts().subscribe(
  	products => {this.products = products;
  	this.filteredProductList = this.products;},
  	error => this.errorMessage = <any> error);

  	console.log(this.products);
  	
  }

  onNotify(eventValue:string):void{
  	this.pageTitle = 'Product List ' + eventValue;
  }
  
}