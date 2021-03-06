import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Shoe } from './shoe';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoeService {
    private url:string;
  constructor(private http:HttpClient) { 
    this.url='http://localhost:9200/shoes';
  }
  public addShoe(shoe:Shoe):Observable<Shoe>{
    return this.http.post<Shoe>(this.url,shoe);
  }
  public getAllShoes():Observable<Shoe[]>{
    return this.http.get<Shoe[]>(this.url+"s");
  }
    
}
