import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CelularesComponent } from './celulares/celulares.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ContactosComponent } from './contactos/contactos.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'celulares',
    component: CelularesComponent
  },
  {
    path: 'formulario',
    component: FormularioComponent
  },
  {
    path: 'contactos',
    component: ContactosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
