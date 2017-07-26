import { Component } from '@angular/core';

//class Hero
export class Hero {
  id: number;
  name: string;
}

//array of heroes
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
  <!--<h2>{{hero.name}} details!</h2>-->
  <!--Display the hero's names-->
  <h2>My Heroes</h2>
  <ul class="heroes">
  <li *ngFor="let hero of heroes">
  <!--Each hero goes here -->
  <span class="badge">{{hero.id}}</span> {{hero.name}}
  </li>
  </ul>
  <!--Added HTML with multi-line template strings-->
  <!--<div><label>id: </label>{{hero.id}}</div>-->
  <!--<div>-->
  <!--<label>name: </label> -->
  <!--<input [(ngModel)]="hero.name" placeholder="name">-->
  <!--</div>-->
  `
})
export class AppComponent {
  title = 'Tour of Heroes';

  // hero: Hero = {
  //   id: 1,
  //   name: 'Windstorm',
  // };
  //to expose heroes
  heroes = HEROES;
}
