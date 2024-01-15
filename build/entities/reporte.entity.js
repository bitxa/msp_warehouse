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
exports.Reporte = void 0;
var typeorm_1 = require("typeorm");
var producto_entity_1 = require("./producto.entity");
var Reporte = /** @class */ (function () {
    function Reporte() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", Number)
    ], Reporte.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.ManyToMany)(function () { return producto_entity_1.Producto; }, function (producto) { return producto.reportes; }),
        __metadata("design:type", Array)
    ], Reporte.prototype, "listadoProductos", void 0);
    Reporte = __decorate([
        (0, typeorm_1.Entity)()
    ], Reporte);
    return Reporte;
}());
exports.Reporte = Reporte;
//# sourceMappingURL=reporte.entity.js.map