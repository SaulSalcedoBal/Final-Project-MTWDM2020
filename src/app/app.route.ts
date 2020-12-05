import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./pages/home/home.component";
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';


const routes: Routes = [
    { path: 'home', component: HomeComponent },
    // => (return)

    { path: 'productos', loadChildren: () => import('./pages/productos/productos.module').then(module => module.ProductosModule) },
    { path: 'codigos', loadChildren: () => import('./pages/codigos/codigos.module').then(module => module.CodigosModule) },
    { path: 'clientes', loadChildren: () => import('./pages/clientes/clientes.module').then(module => module.ClientesModule) },
    { path: 'ventas', loadChildren: () => import('./pages/ventas/ventas.module').then(module => module.VentasModule) },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })], //usehash para diferenciar una carpeta de una ruta
    //solo un archivo de rutas principal /forRoot/
    // para archivos de rutas hijos, /forchild/
    exports: [RouterModule]
})

export class AppRouterModule {

}