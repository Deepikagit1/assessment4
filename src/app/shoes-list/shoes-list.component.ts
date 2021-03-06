import { Component, OnInit } from '@angular/core';
import { Shoe } from '../shoe';
import { ShoeService } from '../shoe.service';

@Component({
  selector: 'app-shoes-list',
  templateUrl: './shoes-list.component.html',
  styleUrls: ['./shoes-list.component.css']
})
export class ShoesListComponent implements OnInit {

  private shoesList:Shoe[];

  constructor(private shoeService:ShoeService) { }

 
  ngOnInit() {
    this.shoeService.getAllShoes().subscribe(res=>{
      this.shoesList=res;
    });
  }

}
