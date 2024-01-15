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
exports.ProductoController = void 0;
var common_1 = require("@nestjs/common");
var producto_service_1 = require("./producto.service");
var create_producto_dto_1 = require("./dto/create-producto.dto");
var update_producto_dto_1 = require("./dto/update-producto.dto");
var ProductoController = /** @class */ (function () {
    function ProductoController(gestorInventarioService) {
        this.gestorInventarioService = gestorInventarioService;
    }
    ProductoController.prototype.create = function (createProductoDto) {
        return this.gestorInventarioService.create(createProductoDto);
    };
    ProductoController.prototype.findAll = function () {
        return this.gestorInventarioService.findAll();
    };
    ProductoController.prototype.findOne = function (id) {
        return this.gestorInventarioService.findOne(id);
    };
    ProductoController.prototype.update = function (id, updateProductoDto) {
        return this.gestorInventarioService.update(+id, updateProductoDto);
    };
    ProductoController.prototype.remove = function (id) {
        return this.gestorInventarioService.destroy(id);
    };
    __decorate([
        (0, common_1.Post)(),
        __param(0, (0, common_1.Body)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [create_producto_dto_1.CreateProductoDto]),
        __metadata("design:returntype", void 0)
    ], ProductoController.prototype, "create", null);
    __decorate([
        (0, common_1.Get)(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ProductoController.prototype, "findAll", null);
    __decorate([
        (0, common_1.Get)(':id'),
        __param(0, (0, common_1.Param)('id')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", Promise)
    ], ProductoController.prototype, "findOne", null);
    __decorate([
        (0, common_1.Patch)(':id'),
        __param(0, (0, common_1.Param)('id')),
        __param(1, (0, common_1.Body)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, update_producto_dto_1.UpdateProductoDto]),
        __metadata("design:returntype", void 0)
    ], ProductoController.prototype, "update", null);
    __decorate([
        (0, common_1.Delete)(':id'),
        __param(0, (0, common_1.Param)('id')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], ProductoController.prototype, "remove", null);
    ProductoController = __decorate([
        (0, common_1.Controller)('producto'),
        __metadata("design:paramtypes", [producto_service_1.ProductoService])
    ], ProductoController);
    return ProductoController;
}());
exports.ProductoController = ProductoController;
//# sourceMappingURL=producto.controller.js.map