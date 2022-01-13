import { Component } from '@angular/core';
import { ImagesService } from 'src/app/servicios/images.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  public photos:Array<any>=[];
  constructor( private imagesServicios:ImagesService)
  {
    this.imagesServicios.getImages().subscribe((resp:any)=>{
      this.photos=resp;
    });
  }
}
