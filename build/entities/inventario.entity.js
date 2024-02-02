"use strict";
// inventario.entity.ts
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
var typeorm_1 = require("typeorm");
var administrador_entity_1 = require("./administrador.entity");
var producto_medico_entity_1 = require("./producto-medico.entity");
var log_entity_1 = require("./log.entity");
var Inventario = /** @class */ (function () {
    function Inventario() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", Number)
    ], Inventario.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: 'cantidad' }),
        __metadata("design:type", Number)
    ], Inventario.prototype, "cantidad", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: 'fecha_fabricacion' }),
        __metadata("design:type", String)
    ], Inventario.prototype, "fechaFabricacion", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: 'fecha_caducidad' }),
        __metadata("design:type", String)
    ], Inventario.prototype, "fechaCaducidad", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: 'almacen' }),
        __metadata("design:type", String)
    ], Inventario.prototype, "almacen", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: 'ubicacion' }),
        __metadata("design:type", String)
    ], Inventario.prototype, "ubicacion", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return administrador_entity_1.Administrador; }, function (administrador) { return administrador.inventarios; }, { cascade: true }),
        __metadata("design:type", administrador_entity_1.Administrador)
    ], Inventario.prototype, "administrador", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return producto_medico_entity_1.ProductoMedico; }, function (productoMedico) { return productoMedico.inventario; }),
        __metadata("design:type", producto_medico_entity_1.ProductoMedico)
    ], Inventario.prototype, "productoMedico", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return log_entity_1.InventarioUpdateLog; }, function (updateLog) { return updateLog.inventario; }),
        __metadata("design:type", Array)
    ], Inventario.prototype, "updateLogs", void 0);
    Inventario = __decorate([
        (0, typeorm_1.Entity)()
    ], Inventario);
    return Inventario;
}());
exports.Inventario = Inventario;
//# sourceMappingURL=inventario.entity.js.map