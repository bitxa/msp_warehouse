"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdenReubicacionModule = void 0;
var common_1 = require("@nestjs/common");
var orden_reubicacion_service_1 = require("./orden-reubicacion.service");
var orden_reubicacion_controller_1 = require("./orden-reubicacion.controller");
var OrdenReubicacionModule = /** @class */ (function () {
    function OrdenReubicacionModule() {
    }
    OrdenReubicacionModule = __decorate([
        (0, common_1.Module)({
            controllers: [orden_reubicacion_controller_1.OrdenReubicacionController],
            providers: [orden_reubicacion_service_1.OrdenReubicacionService],
        })
    ], OrdenReubicacionModule);
    return OrdenReubicacionModule;
}());
exports.OrdenReubicacionModule = OrdenReubicacionModule;
//# sourceMappingURL=orden-reubicacion.module.js.map