import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  items:string[];
  paginas:number;
  display:string;
  constructor() { 
	  this.items= ["banana","manzana","limon","pera","melon","naranja"];
	  this.paginas = 10;
	  this.listar();
  }

  ngOnInit() {
  }
  
  listar(){
	console.log(this.items)
  }

}
