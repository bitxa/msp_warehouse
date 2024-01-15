"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GestorInventarioModule = void 0;
var common_1 = require("@nestjs/common");
var gestor_inventario_service_1 = require("./gestor-inventario.service");
var gestor_inventario_controller_1 = require("./gestor-inventario.controller");
var GestorInventarioModule = /** @class */ (function () {
    function GestorInventarioModule() {
    }
    GestorInventarioModule = __decorate([
        (0, common_1.Module)({
            controllers: [gestor_inventario_controller_1.GestorInventarioController],
            providers: [gestor_inventario_service_1.GestorInventarioService],
        })
    ], GestorInventarioModule);
    return GestorInventarioModule;
}());
exports.GestorInventarioModule = GestorInventarioModule;
//# sourceMappingURL=gestor-inventario.module.js.map