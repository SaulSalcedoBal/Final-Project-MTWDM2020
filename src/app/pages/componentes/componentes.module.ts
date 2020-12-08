import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentesComponent } from './componentes.component';
import { CarouselComponent } from './carousel/carousel.component';
import { PerfilComponent } from './perfil/perfil.component';
import { CarritoComponent } from './carrito/carrito.component';
import { FavoritosComponent } from './favoritos/favoritos.component';
import { ComponentesRouterModule } from './componentes.routes';
import { FormsModule } from '@angular/forms';
import { DetalleComponent } from './detalle/detalle.component';
import { AllgamesComponent } from './allgames/allgames.component';



@NgModule({
  declarations: [ComponentesComponent, CarouselComponent, PerfilComponent, CarritoComponent, FavoritosComponent, DetalleComponent, AllgamesComponent],
  imports: [
    CommonModule,
    ComponentesRouterModule,
    FormsModule
  ]
})
export class ComponentesModule { }
