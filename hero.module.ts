import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HeroesDeliveryService } from './all-heroes.service'
import { HeroComponent } from './hero.component';

@NgModule({
	imports: [BrowserModule],
	declarations: [HeroComponent],
	providers: [HeroesDeliveryService],
	bootstrap: [HeroComponent]
})
export class HeroModule{
	
}