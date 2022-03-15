import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './componentesNavegacion/side-bar/side-bar.component';
import { TopComponent } from './componentesNavegacion/top/top.component';
import { NoticiasComponent } from './componentesContenido/noticias/noticias.component';
import { CreateNoticiaComponent } from './componentesContenido/create-noticia/create-noticia.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule} from '@angular/material/slider';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    TopComponent,
    NoticiasComponent,
    CreateNoticiaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
