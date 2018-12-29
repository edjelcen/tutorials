import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Hero, HEROES } from '../models/Hero';
import { HeroService } from './hero.service';
import { MessageService } from '../shared/message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  selectedHero: Hero;
  heroes: Hero[];

  constructor(private heroService: HeroService, private messageService: MessageService) { }

  ngOnInit() {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.messageService.add('hero is selected: id=' + hero.id + ', name=' + hero.name);
    this.selectedHero = hero;
  }


  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }
}
