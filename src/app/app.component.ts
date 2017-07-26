import { Component } from '@angular/core';

//class Hero
export class Hero {
  id: number;
  name: string;
}

const HEROES: Hero[] = [
  { id: 11, name: 'Mr. Nice' },
{ id: 12, name: 'Narco' },
{ id: 13, name: 'Bombasto' },
{ id: 14, name: 'Celeritas' },
{ id: 15, name: 'Magneta' },
{ id: 16, name: 'RubberMan' },
{ id: 17, name: 'Dynama' },
{ id: 18, name: 'Dr IQ' },
{ id: 19, name: 'Magma' },
{ id: 20, name: 'Tornado' }
]

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
  // hero: Hero = {
  //   id: 1,
  //   name: 'Windstorm',
  // };
  heroes = HEROES;
}
