"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageService = void 0;
var core_1 = require("@angular/core");
var MessageService = /** @class */ (function () {
    function MessageService() {
        var _this = this;
        this.messages = [];
        this.add = function (message) {
            _this.messages.push(message);
        };
        this.clear = function () {
            _this.messages = [];
        };
    }
    MessageService = __decorate([
        core_1.Injectable({ providedIn: 'root' })
    ], MessageService);
    return MessageService;
}());
exports.MessageService = MessageService;
