import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministradorComponent } from './administrador/administrador.component';
import { ComprasComponent } from './compras/compras.component';
import { VentasComponent } from './ventas/ventas.component';
import { ContadorComponent } from './contador/contador.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'card',
    pathMatch: 'full'
  },
  {
    path: 'compras',
    component: ComprasComponent
  },
  {
    path: 'ventas',
    component: VentasComponent 
  },
  {
    path: 'usuarios',
    component: AdministradorComponent 
  },
  {
    path: 'contador',
    component: ContadorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
