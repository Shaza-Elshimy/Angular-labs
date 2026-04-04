import { AboutAs } from './components/about-as/about-as';
import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Home } from "./components/home/home";
import { Footer } from "./components/footer/footer";
import { Navbar } from './components/navbar/navbar';
import { ContactUs } from './components/contact-us/contact-us';
import { NotFound } from './components/not-found/not-found';

@Component({
  selector: 'app-root',
  imports: [Home, Footer,Navbar,AboutAs,ContactUs,NotFound, RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('studentApp');
}
