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
exports.Pedido = void 0;
var typeorm_1 = require("typeorm");
var producto_entity_1 = require("./producto.entity");
var Pedido = /** @class */ (function () {
    function Pedido() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", Number)
    ], Pedido.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Pedido.prototype, "nombre", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", Number)
    ], Pedido.prototype, "cantidad", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", Number)
    ], Pedido.prototype, "precio", void 0);
    __decorate([
        (0, typeorm_1.ManyToMany)(function () { return producto_entity_1.Producto; }, function (producto) { return producto.pedidos; }),
        __metadata("design:type", Array)
    ], Pedido.prototype, "productos", void 0);
    Pedido = __decorate([
        (0, typeorm_1.Entity)()
    ], Pedido);
    return Pedido;
}());
exports.Pedido = Pedido;
//# sourceMappingURL=pedido.entity.js.map