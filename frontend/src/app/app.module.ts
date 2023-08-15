import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AreasContaminadasComponent } from './pages/areas-contaminadas/areas-contaminadas.component';
import { ForoIdeasComponent } from './pages/foro-ideas/foro-ideas.component';
import { IniciarSesionComponent } from './pages/iniciar-sesion/iniciar-sesion.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { MotivarAyudarComponent } from './pages/motivar-ayudar/motivar-ayudar.component';
import { ProblemaComponent } from './pages/problema/problema.component';
import { ReciclarBasuraComponent } from './pages/reciclar-basura/reciclar-basura.component';
import { RegistroComponent } from './pages/registro/registro.component';

@NgModule({
  declarations: [
    AppComponent,
    AreasContaminadasComponent,
    ForoIdeasComponent,
    IniciarSesionComponent,
    InicioComponent,
    MotivarAyudarComponent,
    ProblemaComponent,
    ReciclarBasuraComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
