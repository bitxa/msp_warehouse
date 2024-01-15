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
exports.PersonalAlmacen = void 0;
var typeorm_1 = require("typeorm");
var almacen_entity_1 = require("./almacen.entity");
var inventario_entity_1 = require("./inventario.entity");
var PersonalAlmacen = /** @class */ (function () {
    function PersonalAlmacen() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", Number)
    ], PersonalAlmacen.prototype, "idEmpleado", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], PersonalAlmacen.prototype, "nombre", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], PersonalAlmacen.prototype, "rol", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], PersonalAlmacen.prototype, "correo", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", Number)
    ], PersonalAlmacen.prototype, "telefono", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], PersonalAlmacen.prototype, "areaResponsable", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return inventario_entity_1.Inventario; }, function (inventario) { return inventario.gestorInventario; }),
        __metadata("design:type", Array)
    ], PersonalAlmacen.prototype, "inventarios", void 0);
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return almacen_entity_1.Almacen; }, function (almacen) { return almacen.gestorInventario; }),
        __metadata("design:type", almacen_entity_1.Almacen)
    ], PersonalAlmacen.prototype, "almacen", void 0);
    PersonalAlmacen = __decorate([
        (0, typeorm_1.Entity)()
    ], PersonalAlmacen);
    return PersonalAlmacen;
}());
exports.PersonalAlmacen = PersonalAlmacen;
//# sourceMappingURL=personal-almacen.entity.js.map