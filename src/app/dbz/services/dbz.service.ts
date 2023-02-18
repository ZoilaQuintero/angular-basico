import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Injectable()
export class DbzService {
  private _personajesd: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 15000,
    },
    {
      nombre: 'Begeta',
      poder: 11000,
    },
  ];

  get perdonaje():Personaje[]{
    return [...this._personajesd];
  }
  constructor() {
    console.log('serviicio');
  }

  agregraPersonaje(personaje:Personaje):void{
    this._personajesd.push(personaje);
  }
}
