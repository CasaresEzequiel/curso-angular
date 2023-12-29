import { Injectable } from '@angular/core';
import { HousingLocation } from './housinglocation';

@Injectable({
  providedIn: 'root',
})
export class HousingService {
  readonly baseUrl = 'https://angular.dev/assets/tutorials/common';

  protected housingLocationList: HousingLocation[] = [
    {
      id: 0,
      nombre: 'Duplex a estrenar',
      ciudad: 'Pipinas',
      provincia: 'Bs. As.',
      foto: `${this.baseUrl}/bernard-hermant-CLKGGwIBTaY-unsplash.jpg`,
      unidadesDisponibles: 2,
      wifi: true,
      lavanderia: true,
    },
    {
      id: 1,
      nombre: 'Departamentos',
      ciudad: 'Punta Indio',
      provincia: 'Bs. As.',
      foto: `${this.baseUrl}/brandon-griggs-wR11KBaB86U-unsplash.jpg`,
      unidadesDisponibles: 0,
      wifi: false,
      lavanderia: true,
    },
    {
      id: 2,
      nombre: 'Casa estilo antiguo',
      ciudad: 'Villa La Angostura',
      provincia: 'Neuquén',
      foto: `${this.baseUrl}/i-do-nothing-but-love-lAyXdl1-Wmc-unsplash.jpg`,
      unidadesDisponibles: 1,
      wifi: false,
      lavanderia: false,
    },
    {
      id: 3,
      nombre: 'Casa - 3 dormitorios',
      ciudad: 'La Plata',
      provincia: 'Bs. As.',
      foto: `${this.baseUrl}/ian-macdonald-W8z6aiwfi1E-unsplash.jpg`,
      unidadesDisponibles: 1,
      wifi: true,
      lavanderia: false,
    },
    {
      id: 4,
      nombre: 'Happy Homes Group',
      ciudad: 'Villa La Angostura',
      provincia: 'Neuquén',
      foto: `${this.baseUrl}/krzysztof-hepner-978RAXoXnH4-unsplash.jpg`,
      unidadesDisponibles: 1,
      wifi: true,
      lavanderia: false,
    },
    {
      id: 5,
      nombre: 'Hopeful Apartment Group',
      ciudad: 'La Plata',
      provincia: 'Bs. As.',
      foto: `${this.baseUrl}/r-architecture-JvQ0Q5IkeMM-unsplash.jpg`,
      unidadesDisponibles: 2,
      wifi: true,
      lavanderia: true,
    },
    {
      id: 6,
      nombre: 'Casa - 2 dormitorios',
      ciudad: 'Puerto Madero',
      provincia: 'Bs. As.',
      foto: `${this.baseUrl}/phil-hearing-IYfp2Ixe9nM-unsplash.jpg`,
      unidadesDisponibles: 5,
      wifi: true,
      lavanderia: true,
    },
    {
      id: 7,
      nombre: 'Casa con cochera',
      ciudad: 'Vieytes',
      provincia: 'Bs. As.',
      foto: `${this.baseUrl}/r-architecture-GGupkreKwxA-unsplash.jpg`,
      unidadesDisponibles: 2,
      wifi: true,
      lavanderia: true,
    },
    {
      id: 8,
      nombre: 'Torres de Manantiales',
      ciudad: 'Pipinas',
      provincia: 'Bs. As.',
      foto: `${this.baseUrl}/saru-robert-9rP3mxf8qWI-unsplash.jpg`,
      unidadesDisponibles: 10,
      wifi: false,
      lavanderia: false,
    },
    {
      id: 9,
      nombre: 'Mansión Stark',
      ciudad: 'Pipinas',
      provincia: 'Bs. As.',
      foto: `${this.baseUrl}/webaliser-_TPTXZd9mOo-unsplash.jpg`,
      unidadesDisponibles: 1,
      wifi: true,
      lavanderia: true,
    },
  ];

  getAllHousingLocations(): HousingLocation[] {
    return this.housingLocationList;
  }

  getHousingLocationById(id: number): HousingLocation | undefined {
    return this.housingLocationList.find(
      (housingLocation) => housingLocation.id === id
    );
  }
}
