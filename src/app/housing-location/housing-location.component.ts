import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../housinglocation';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section class="listing">
      <img
        class="listing-photo"
        [src]="housingLocation.foto"
        alt="Exterior photo of {{ housingLocation.nombre }}"
        crossorigin
      />
      <h2 class="listing-heading">{{ housingLocation.nombre }}</h2>
      <p class="listing-location">
        {{ housingLocation.ciudad }}, {{ housingLocation.provincia }}
      </p>
      <a [routerLink]="['/details', housingLocation.id]">Conocé mas</a>
    </section>
  `,
  styleUrls: ['./housing-location.component.css'],
})
export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocation;
}
