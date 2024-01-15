"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Almacen = void 0;
// almacenes.entity.ts
var typeorm_1 = require("typeorm");
var orden_reubicacion_entity_1 = require("./orden-reubicacion.entity");
var gestor_inventario_entity_1 = require("./gestor-inventario.entity");
var Almacen = /** @class */ (function () {
    function Almacen() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", Number)
    ], Almacen.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Almacen.prototype, "ubicacion", void 0);
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return gestor_inventario_entity_1.GestorInventario; }, function (gestorInventario) { return gestorInventario.almacen; }),
        __metadata("design:type", gestor_inventario_entity_1.GestorInventario)
    ], Almacen.prototype, "gestorInventario", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return orden_reubicacion_entity_1.OrdenReubicacion; }, function (ordenReubicacion) { return ordenReubicacion.almacen; }),
        __metadata("design:type", Array)
    ], Almacen.prototype, "ordenesReubicacion", void 0);
    Almacen = __decorate([
        (0, typeorm_1.Entity)()
    ], Almacen);
    return Almacen;
}());
exports.Almacen = Almacen;
//# sourceMappingURL=almacen.entity.js.map