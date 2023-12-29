import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
const routeConfig: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Tu Próximo Techo - Bienes Raíces',
  },
  {
    path: 'details/:id',
    component: DetailsComponent,
    title: 'Detalles de la propiedad',
  },
];
export default routeConfig;
