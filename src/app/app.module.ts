import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BuscaComponent } from './busca/busca.component';

import { MatCarouselModule } from '@ngmodule/material-carousel' ;     



import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


// Material components
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatDividerModule} from '@angular/material/divider';
import { LoginComponent } from './login/login.component';
import { PrincipalComponent } from './principal/principal.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ConteudoComponent } from './conteudo/conteudo.component';


@NgModule({
  declarations: [
    AppComponent,
    BuscaComponent,
    LoginComponent,
    PrincipalComponent,
    CarouselComponent,
    ConteudoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCarouselModule . forRoot (),
    MatButtonModule,
    MatGridListModule,
    MatListModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatBadgeModule,
    MatTooltipModule,
    MatSidenavModule,
    AppRoutingModule,
    MatCheckboxModule,
    MatInputModule,
    MatSnackBarModule,
    MatMenuModule,
    MatDividerModule,
 
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
