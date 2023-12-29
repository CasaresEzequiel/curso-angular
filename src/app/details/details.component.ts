import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../housing.service';
import { HousingLocation } from '../housinglocation';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  template: `
    <article>
      <img
        class="listing-photo"
        [src]="housingLocation?.foto"
        alt="Exterior photo of {{ housingLocation?.nombre }}"
        crossorigin
      />
      <section class="listing-description">
        <h2 class="listing-heading">{{ housingLocation?.nombre }}</h2>
        <p class="listing-location">
          {{ housingLocation?.ciudad }}, {{ housingLocation?.provincia }}
        </p>
      </section>
      <section class="listing-features">
        <h2 class="section-heading">Acerca de esta propiedad</h2>
        <ul>
          <li>
            Unidades disponibles: {{ housingLocation?.unidadesDisponibles }}
          </li>
          <li>Cuenta con wifi: {{ housingLocation?.wifi }}</li>
          <li>
            Cuenta con servicio de limpieza: {{ housingLocation?.lavanderia }}
          </li>
        </ul>
      </section>
    </article>
  `,
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  housingService = inject(HousingService);
  housingLocation: HousingLocation | undefined;
  constructor() {
    const housingLocationId = Number(this.route.snapshot.params['id']);
    this.housingLocation =
      this.housingService.getHousingLocationById(housingLocationId);
  }
}
