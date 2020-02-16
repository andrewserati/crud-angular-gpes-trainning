import { Routes } from '@angular/router';

import { FilmeComponent } from './filme/filme.component';
import { HomeComponent } from './home/home.component';

export const ROUTES: Routes = [

    {path: '', component: HomeComponent},
    {path: 'filme', component: FilmeComponent}

];