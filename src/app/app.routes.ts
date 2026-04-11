import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { AboutAs } from './components/about-as/about-as';
import { ContactUs } from './components/contact-us/contact-us';
import { NotFound } from './components/not-found/not-found';
import { CourseDetails } from './components/course-details/course-details';
import { CourseForm } from './components/course-form/course-form';

export const routes: Routes = [
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'home',component:Home},
    {path:'aboutUs',component:AboutAs},
    {path:'contactUs',component:ContactUs},
    {path:'courses/new',component:CourseForm},
    {path:'courses/edit/:id',component:CourseForm},
    {path:'details/:id',component:CourseDetails},
    {path:'**',component:NotFound}
];
