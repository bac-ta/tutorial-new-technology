"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeroService = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var fake_heroes_1 = require("../models/fake-heroes");
var HeroService = /** @class */ (function () {
    function HeroService(messageService) {
        var _this = this;
        this.messageService = messageService;
        this.getHeroes = function () {
            _this.messageService.add('Hero service: fetched heroes');
            return rxjs_1.of(fake_heroes_1.HEROES);
        };
    }
    HeroService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], HeroService);
    return HeroService;
}());
exports.HeroService = HeroService;
