import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, PreloadAllModules} from "@angular/router"
import { HttpModule } from "@angular/http"
import { HttpClientModule } from "@angular/common/http"

import { AppComponent } from './app.component';
import { FilmeComponent } from './filme/filme.component';

import { ROUTES } from "./app.routing";
import { HomeComponent } from './home/home.component'

@NgModule({
  declarations: [
    AppComponent,
    FilmeComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
