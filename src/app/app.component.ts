import { Component } from '@angular/core';

//class Hero
export class Hero {
  id: number;
  name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: `
  <h1>{{title}}</h1>
  <!--referred hero's name property to class Hero-->
  <h2>{{hero.name}} details!</h2>
  <!--Added HTML with multi-line template strings-->
  <div><label>id: </label>{{hero.id}}</div>
  <div>
  <label>name: </label>
  <input [(ngModel)]="hero.name" placeholder="name">
  </div>
  `
})
export class AppComponent {
  title = 'Tour of Heroes';
  hero: Hero = {
    id: 1,
    name: 'Windstorm',
  };
}
