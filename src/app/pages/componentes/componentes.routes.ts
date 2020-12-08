import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { ComponentesComponent } from './componentes.component';
import { CarouselComponent } from './carousel/carousel.component';
import { PerfilComponent } from './perfil/perfil.component';
import { CarritoComponent } from './carrito/carrito.component';
import { FavoritosComponent } from './favoritos/favoritos.component';
import { DetalleComponent } from './detalle/detalle.component';




const routes : Routes = [
    {
        path: '',
        component: ComponentesComponent,
        children: [
            {
                path: 'carrito', component: CarritoComponent
            },
            {
                path: 'favoritos', component: FavoritosComponent
            },
            {
                path: 'perfil', component: PerfilComponent
            },
            {
                path: 'detalle', component: DetalleComponent
            }
        ]
        
    }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ComponentesRouterModule { }