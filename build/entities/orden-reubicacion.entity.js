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
exports.OrdenReubicacion = void 0;
// orden-reubicacion.entity.ts
var typeorm_1 = require("typeorm");
var db_orden_entity_1 = require("./db-orden.entity");
var almacen_entity_1 = require("./almacen.entity");
var OrdenReubicacion = /** @class */ (function () {
    function OrdenReubicacion() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", Number)
    ], OrdenReubicacion.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], OrdenReubicacion.prototype, "destino", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], OrdenReubicacion.prototype, "listaProductos", void 0);
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return almacen_entity_1.Almacen; }, function (almacen) { return almacen.ordenesReubicacion; }),
        __metadata("design:type", almacen_entity_1.Almacen)
    ], OrdenReubicacion.prototype, "almacen", void 0);
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return db_orden_entity_1.DbOrden; }, function (dbOrden) { return dbOrden.ordenesReubicacion; }),
        __metadata("design:type", db_orden_entity_1.DbOrden)
    ], OrdenReubicacion.prototype, "dbOrden", void 0);
    OrdenReubicacion = __decorate([
        (0, typeorm_1.Entity)()
    ], OrdenReubicacion);
    return OrdenReubicacion;
}());
exports.OrdenReubicacion = OrdenReubicacion;
//# sourceMappingURL=orden-reubicacion.entity.js.map