import {Component, OnInit} from '@angular/core';
import {Hero} from '../../models/hero';
import {ActivatedRoute} from '@angular/router';
import {HeroService} from '../../services/hero.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-hero-detail.component',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  hero: Hero;

  constructor(private route: ActivatedRoute,
              private heroService: HeroService,
              private location: Location) {
  }

  ngOnInit(): void {
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id).subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }

  saveHero(): void {
    this.heroService.updateHero(this.hero).subscribe(() => this.goBack());
  }
}
