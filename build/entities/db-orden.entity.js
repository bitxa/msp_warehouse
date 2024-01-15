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
exports.DbOrden = void 0;
// db-orden.entity.ts
var typeorm_1 = require("typeorm");
var orden_reubicacion_entity_1 = require("./orden-reubicacion.entity");
var DbOrden = /** @class */ (function () {
    function DbOrden() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", Number)
    ], DbOrden.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return orden_reubicacion_entity_1.OrdenReubicacion; }, function (ordenReubicacion) { return ordenReubicacion.dbOrden; }),
        __metadata("design:type", Array)
    ], DbOrden.prototype, "ordenesReubicacion", void 0);
    DbOrden = __decorate([
        (0, typeorm_1.Entity)()
    ], DbOrden);
    return DbOrden;
}());
exports.DbOrden = DbOrden;
//# sourceMappingURL=db-orden.entity.js.map