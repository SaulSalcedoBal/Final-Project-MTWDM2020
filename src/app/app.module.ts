import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AuthGuard } from './guards/auth-guard.service';

import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { XboxComponent } from './components/sections/xbox/xbox.component';
import { PlayStationComponent } from './components/sections/play-station/play-station.component';
import { PCComponent } from './components/sections/pc/pc.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { JwtModule } from "@auth0/angular-jwt";

import { FormsModule } from '@angular/forms';
import { SidebarComponent } from './components/sections/sidebar/sidebar.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AppRouterModule } from './app.routes';
import { FooterComponent } from './components/sections/footer/footer.component';

export function tokenGetter() {
  return localStorage.getItem("jwt");
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    XboxComponent,
    PlayStationComponent,
    PCComponent,
    SidebarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRouterModule,
    HttpClientModule,
    NgbModule,
    BrowserAnimationsModule,
    CarouselModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ["localhost:44398"],
        disallowedRoutes: []
      }
    })
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
