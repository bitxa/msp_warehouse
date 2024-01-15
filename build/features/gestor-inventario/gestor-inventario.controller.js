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
exports.GestorInventarioController = void 0;
var common_1 = require("@nestjs/common");
var gestor_inventario_service_1 = require("./gestor-inventario.service");
var create_gestor_inventario_dto_1 = require("./dto/create-gestor-inventario.dto");
var update_gestor_inventario_dto_1 = require("./dto/update-gestor-inventario.dto");
var GestorInventarioController = /** @class */ (function () {
    function GestorInventarioController(gestorInventarioService) {
        this.gestorInventarioService = gestorInventarioService;
    }
    GestorInventarioController.prototype.create = function (createGestorInventarioDto) {
        return this.gestorInventarioService.create(createGestorInventarioDto);
    };
    GestorInventarioController.prototype.findAll = function () {
        return this.gestorInventarioService.findAll();
    };
    GestorInventarioController.prototype.findOne = function (id) {
        return this.gestorInventarioService.findOne(id);
    };
    GestorInventarioController.prototype.update = function (id, updateGestorInventarioDto) {
        return this.gestorInventarioService.update(+id, updateGestorInventarioDto);
    };
    GestorInventarioController.prototype.remove = function (id) {
        return this.gestorInventarioService.remove(id);
    };
    __decorate([
        (0, common_1.Post)(),
        __param(0, (0, common_1.Body)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [create_gestor_inventario_dto_1.CreateGestorInventarioDto]),
        __metadata("design:returntype", void 0)
    ], GestorInventarioController.prototype, "create", null);
    __decorate([
        (0, common_1.Get)(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], GestorInventarioController.prototype, "findAll", null);
    __decorate([
        (0, common_1.Get)(':id'),
        __param(0, (0, common_1.Param)('id')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", Promise)
    ], GestorInventarioController.prototype, "findOne", null);
    __decorate([
        (0, common_1.Patch)(':id'),
        __param(0, (0, common_1.Param)('id')),
        __param(1, (0, common_1.Body)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, update_gestor_inventario_dto_1.UpdateGestorInventarioDto]),
        __metadata("design:returntype", void 0)
    ], GestorInventarioController.prototype, "update", null);
    __decorate([
        (0, common_1.Delete)(':id'),
        __param(0, (0, common_1.Param)('id')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], GestorInventarioController.prototype, "remove", null);
    GestorInventarioController = __decorate([
        (0, common_1.Controller)('gestor-inventario'),
        __metadata("design:paramtypes", [gestor_inventario_service_1.GestorInventarioService])
    ], GestorInventarioController);
    return GestorInventarioController;
}());
exports.GestorInventarioController = GestorInventarioController;
//# sourceMappingURL=gestor-inventario.controller.js.map