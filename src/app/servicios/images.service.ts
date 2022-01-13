import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {
 _url ="https://jsonplaceholder.typicode.com/photos";
  constructor(private http:HttpClient)
  {
    console.log("Servicio de imagenes");
  }
  getImages(){
    let header = new HttpHeaders().set('Type-content','aplication/json');
    return this.http.get(this._url,{
      headers:header
    });
  }
}
