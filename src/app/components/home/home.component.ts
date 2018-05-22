import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  heroes: any[] = [];

  constructor(private _heroesService: HeroesService) {}

  ngOnInit() {
   this.heroes = this._heroesService.getHeroes();
   console.log(this.heroes);
  }

}
