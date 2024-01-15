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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdenReubicacionController = void 0;
var common_1 = require("@nestjs/common");
var orden_reubicacion_service_1 = require("./orden-reubicacion.service");
var create_orden_reubicacion_dto_1 = require("./dto/create-orden-reubicacion.dto");
var update_orden_reubicacion_dto_1 = require("./dto/update-orden-reubicacion.dto");
var OrdenReubicacionController = /** @class */ (function () {
    function OrdenReubicacionController(ordenReubicacionService) {
        this.ordenReubicacionService = ordenReubicacionService;
    }
    OrdenReubicacionController.prototype.create = function (createOrdenReubicacionDto) {
        return this.ordenReubicacionService.create(createOrdenReubicacionDto);
    };
    OrdenReubicacionController.prototype.findAll = function () {
        return this.ordenReubicacionService.findAll();
    };
    OrdenReubicacionController.prototype.findOne = function (id) {
        return this.ordenReubicacionService.findOne(id);
    };
    OrdenReubicacionController.prototype.update = function (id, updateOrdenReubicacionDto) {
        return this.ordenReubicacionService.update(+id, updateOrdenReubicacionDto);
    };
    OrdenReubicacionController.prototype.remove = function (id) {
        return this.ordenReubicacionService.destroy(id);
    };
    __decorate([
        (0, common_1.Post)(),
        __param(0, (0, common_1.Body)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [create_orden_reubicacion_dto_1.CreateOrdenReubicacionDto]),
        __metadata("design:returntype", void 0)
    ], OrdenReubicacionController.prototype, "create", null);
    __decorate([
        (0, common_1.Get)(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], OrdenReubicacionController.prototype, "findAll", null);
    __decorate([
        (0, common_1.Get)(':id'),
        __param(0, (0, common_1.Param)('id')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", Promise)
    ], OrdenReubicacionController.prototype, "findOne", null);
    __decorate([
        (0, common_1.Patch)(':id'),
        __param(0, (0, common_1.Param)('id')),
        __param(1, (0, common_1.Body)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, update_orden_reubicacion_dto_1.UpdateOrdenReubicacionDto]),
        __metadata("design:returntype", void 0)
    ], OrdenReubicacionController.prototype, "update", null);
    __decorate([
        (0, common_1.Delete)(':id'),
        __param(0, (0, common_1.Param)('id')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], OrdenReubicacionController.prototype, "remove", null);
    OrdenReubicacionController = __decorate([
        (0, common_1.Controller)('ordenReubicacion'),
        __metadata("design:paramtypes", [orden_reubicacion_service_1.OrdenReubicacionService])
    ], OrdenReubicacionController);
    return OrdenReubicacionController;
}());
exports.OrdenReubicacionController = OrdenReubicacionController;
//# sourceMappingURL=orden-reubicacion.controller.js.map