import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './componentesNavegacion/side-nav/side-nav.component';
import { NoticiasComponent } from './componentesContenido/noticias/noticias.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule} from '@angular/material/slider';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatGridListModule} from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SideNavLateralComponent } from './componentesNavegacion/side-nav-lateral/side-nav-lateral.component';
import { SideNavMainComponent } from './componentesNavegacion/side-nav-main/side-nav-main.component';
import { InicioComponent } from './componentesContenido/inicio/inicio.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    NoticiasComponent,
    SideNavLateralComponent,
    SideNavMainComponent,
    InicioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatSidenavModule,
    MatGridListModule,
    MatListModule, 
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
