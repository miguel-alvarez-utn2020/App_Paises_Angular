import { Component, OnInit } from '@angular/core';
import { Country } from '../../interface/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
    `
      button{
        margin-right: 5px;
      }
    
    `
  ]
})
export class PorRegionComponent implements OnInit {

  regiones: string[] = [ 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  regionActiva:string = '';
  termino: string = '';
  regionesArr:Country[] = [];

  constructor(private paisService:PaisService) { }

  ngOnInit(): void {
  }

  getClassCSS( region:string ):string{
    return ( region === this.regionActiva)?'btn btn-primary': 'btn btn-outline-primary';
  }

  activarRegion( region:string ){
    if(region === this.regionActiva){return;}
    this.regionActiva = region;
    

    //llamar al servicio 
    this.termino = region;
    this.paisService.getRegiones( this.termino )
    .subscribe( (region) => {
      this.regionesArr = region;
    });
  }

}
