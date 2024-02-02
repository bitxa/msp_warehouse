"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventarioModule = void 0;
var common_1 = require("@nestjs/common");
var inventario_service_1 = require("./inventario.service");
var inventario_controller_1 = require("./inventario.controller");
var inventario_entity_1 = require("../../entities/inventario.entity");
var typeorm_1 = require("@nestjs/typeorm");
var producto_medico_entity_1 = require("../../entities/producto-medico.entity");
var administrador_service_1 = require("../administrador/administrador.service");
var InventarioModule = /** @class */ (function () {
    function InventarioModule() {
    }
    InventarioModule = __decorate([
        (0, common_1.Module)({
            imports: [typeorm_1.TypeOrmModule.forFeature([producto_medico_entity_1.ProductoMedico, inventario_entity_1.Inventario])],
            controllers: [inventario_controller_1.InventarioController],
            providers: [inventario_service_1.InventarioService, administrador_service_1.AdministradorService],
            exports: [inventario_service_1.InventarioService],
        })
    ], InventarioModule);
    return InventarioModule;
}());
exports.InventarioModule = InventarioModule;
//# sourceMappingURL=inventario.module.js.map