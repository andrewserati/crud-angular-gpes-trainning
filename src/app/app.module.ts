import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, PreloadAllModules} from "@angular/router"
import { HttpModule } from "@angular/http"
import { HttpClientModule, HttpClient } from "@angular/common/http"
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppComponent } from './app.component';
import { FilmeComponent } from './filme/filme.component';
import { HomeComponent } from './home/home.component'

import { FilmeService } from './filme/filme.service';

import { ROUTES } from "./app.routing";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FilmeComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    RouterModule.forRoot(ROUTES),
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [FilmeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
