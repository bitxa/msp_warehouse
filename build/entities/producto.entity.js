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
exports.Producto = void 0;
var typeorm_1 = require("typeorm");
var inventario_entity_1 = require("./inventario.entity");
var reporte_entity_1 = require("./reporte.entity");
var pedido_entity_1 = require("./pedido.entity");
var Producto = /** @class */ (function () {
    function Producto() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", Number)
    ], Producto.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Producto.prototype, "nombre", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Producto.prototype, "descripcion", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Producto.prototype, "fabricante", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: 'float' }),
        __metadata("design:type", Number)
    ], Producto.prototype, "precio", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return inventario_entity_1.Inventario; }, function (inventario) { return inventario.producto; }),
        __metadata("design:type", Array)
    ], Producto.prototype, "inventarios", void 0);
    __decorate([
        (0, typeorm_1.ManyToMany)(function () { return reporte_entity_1.Reporte; }, function (reporte) { return reporte.listadoProductos; }),
        __metadata("design:type", Array)
    ], Producto.prototype, "reportes", void 0);
    __decorate([
        (0, typeorm_1.ManyToMany)(function () { return pedido_entity_1.Pedido; }, function (pedido) { return pedido.productos; }),
        __metadata("design:type", Array)
    ], Producto.prototype, "pedidos", void 0);
    Producto = __decorate([
        (0, typeorm_1.Entity)()
    ], Producto);
    return Producto;
}());
exports.Producto = Producto;
//# sourceMappingURL=producto.entity.js.map