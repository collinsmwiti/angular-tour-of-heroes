import { Component, Input } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'hero-detail',
  template: `
  <!--referred hero's name property to class Hero-->
  <div *ngIf="hero">
  <!--Add a click handler to expose the selected hero-->
  <h2>{{hero.name}} details!</h2>
  <!--Added HTML with multi-line template strings-->
  <div><label>id: </label>{{hero.id}}</div>
  <div>
  <label>name: </label>
  <input [(ngModel)]="hero.name" placeholder="name">
  </div>
  </div>
  `

})

export class HeroDetailComponent {
  //inorder for user to select their heroes by clicking on them
@Input() hero: Hero;
}
