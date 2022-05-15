import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { AcercadeComponent } from './componentes/acercade/acercade.component';
import { PostsComponent } from './componentes/posts/posts.component';
import { PiedepaginaComponent } from './componentes/piedepagina/piedepagina.component';
import { FormacionAcademicaComponent } from './componentes/formacion-academica/formacion-academica.component';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    AcercadeComponent,
    PostsComponent,
    PiedepaginaComponent,
    FormacionAcademicaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
