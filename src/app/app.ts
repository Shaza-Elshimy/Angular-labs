import { Component, signal } from '@angular/core';
import { Home } from "./components/home/home";
import { Footer } from "./components/footer/footer";
import { Navbar } from './components/navbar/navbar';

@Component({
  selector: 'app-root',
  imports: [Home, Footer,Navbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('studentApp');
}
