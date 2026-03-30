import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { AboutAs } from './components/about-as/about-as';
import { ContactUs } from './components/contact-us/contact-us';
import { NotFound } from './components/not-found/not-found';

export const routes: Routes = [
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'home',component:Home},
    {path:'aboutUs',component:AboutAs},
    {path:'contactUs',component:ContactUs},
    {path:'**',component:NotFound}
];
