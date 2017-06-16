import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroesDeliveryService } from './all-heroes.service'

//import { HEROES } from './all.heroes';

@Component({
	selector: ".hero-component",
	templateUrl: "./templates/hero.component.html",
	styleUrls: ["./styles/hero.component.css"]
})
export class HeroComponent implements OnInit{
	hero: Hero;
	HEROES:Hero[];
	title:string = 'Heroes Catalog - All Stars!';

	constructor(private heroesDeliveryService:HeroesDeliveryService){
		// this.hero = {"id":"hro1","name":"Silverhand","type":"Warrior","weapon":"Sword","level":8,"avatar":"./images/Silverhand.jpg"}
		//this.hero = Heroes[1];
		//this.getHeroesInfo();
	}

	getHeroesInfo():void{
		console.log('before get heroes info');
		this.heroesDeliveryService.getHeroesInfo()
			.then((heroes)=> this.HEROES = heroes)
			.catch((error)=>console.log(`Connection timeout? Check service! ${error}`));
		console.log('after getting heroes info');
	}

	ngOnInit():void{
		this.getHeroesInfo();
	}

}