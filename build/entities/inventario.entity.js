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
exports.Inventario = void 0;
// inventario.entity.ts
var typeorm_1 = require("typeorm");
var producto_entity_1 = require("./producto.entity");
var gestor_inventario_entity_1 = require("./gestor-inventario.entity");
var Inventario = /** @class */ (function () {
    function Inventario() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", Number)
    ], Inventario.prototype, "lote", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Inventario.prototype, "fechaCaducidad", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Inventario.prototype, "fechaFabricacion", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", Number)
    ], Inventario.prototype, "cantidadExistencias", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Inventario.prototype, "ubicacion", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return producto_entity_1.Producto; }, function (producto) { return producto.inventarios; }),
        __metadata("design:type", producto_entity_1.Producto)
    ], Inventario.prototype, "producto", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return gestor_inventario_entity_1.GestorInventario; }, function (gestorInventario) { return gestorInventario.inventarios; }),
        __metadata("design:type", gestor_inventario_entity_1.GestorInventario)
    ], Inventario.prototype, "gestorInventario", void 0);
    Inventario = __decorate([
        (0, typeorm_1.Entity)()
    ], Inventario);
    return Inventario;
}());
exports.Inventario = Inventario;
//# sourceMappingURL=inventario.entity.js.map