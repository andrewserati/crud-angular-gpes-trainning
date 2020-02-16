import { Routes } from '@angular/router';

import { FilmeComponent } from './filme/filme.component';
import { AppComponent } from './app.component';

export const ROUTES: Routes = [

    {path: '', component: AppComponent},
    {path: 'filme', component: FilmeComponent}

];