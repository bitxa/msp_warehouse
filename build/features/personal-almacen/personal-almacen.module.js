"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonalAlmacenModule = void 0;
var common_1 = require("@nestjs/common");
var personal_almacen_service_1 = require("./personal-almacen.service");
var personal_almacen_controller_1 = require("./personal-almacen.controller");
var PersonalAlmacenModule = /** @class */ (function () {
    function PersonalAlmacenModule() {
    }
    PersonalAlmacenModule = __decorate([
        (0, common_1.Module)({
            controllers: [personal_almacen_controller_1.PersonalAlmacenController],
            providers: [personal_almacen_service_1.PersonalAlmacenService],
        })
    ], PersonalAlmacenModule);
    return PersonalAlmacenModule;
}());
exports.PersonalAlmacenModule = PersonalAlmacenModule;
//# sourceMappingURL=personal-almacen.module.js.map