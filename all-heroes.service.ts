import { Injectable } from '@angular/core';

import { Hero } from './hero';
import { HEROES } from './all.heroes';

@Injectable()
export class HeroesDeliveryService{
    getHeroesInfo():Promise<Hero[]>{
        return new Promise<Hero[]>((resolve, reject)=>{
            setTimeout(()=>{
            console.info('Getting heroes info');
                if( HEROES.length > 0 ){
                    resolve(HEROES);
                } else {
                    reject('Heroes delivery has been delayed, please check service!');
                }
            },6000);
        });
    }
}