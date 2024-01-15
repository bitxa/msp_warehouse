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
exports.PedidoController = void 0;
var common_1 = require("@nestjs/common");
var pedido_service_1 = require("./pedido.service");
var create_pedido_dto_1 = require("./dto/create-pedido.dto");
var update_pedido_dto_1 = require("./dto/update-pedido.dto");
var PedidoController = /** @class */ (function () {
    function PedidoController(gestorInventarioService) {
        this.gestorInventarioService = gestorInventarioService;
    }
    PedidoController.prototype.create = function (createPedidoDto) {
        return this.gestorInventarioService.create(createPedidoDto);
    };
    PedidoController.prototype.findAll = function () {
        return this.gestorInventarioService.findAll();
    };
    PedidoController.prototype.findOne = function (id) {
        return this.gestorInventarioService.findOne(id);
    };
    PedidoController.prototype.update = function (id, updatePedidoDto) {
        return this.gestorInventarioService.update(+id, updatePedidoDto);
    };
    PedidoController.prototype.remove = function (id) {
        return this.gestorInventarioService.destroy(id);
    };
    __decorate([
        (0, common_1.Post)(),
        __param(0, (0, common_1.Body)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [create_pedido_dto_1.CreatePedidoDto]),
        __metadata("design:returntype", void 0)
    ], PedidoController.prototype, "create", null);
    __decorate([
        (0, common_1.Get)(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], PedidoController.prototype, "findAll", null);
    __decorate([
        (0, common_1.Get)(':id'),
        __param(0, (0, common_1.Param)('id')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", Promise)
    ], PedidoController.prototype, "findOne", null);
    __decorate([
        (0, common_1.Patch)(':id'),
        __param(0, (0, common_1.Param)('id')),
        __param(1, (0, common_1.Body)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, update_pedido_dto_1.UpdatePedidoDto]),
        __metadata("design:returntype", void 0)
    ], PedidoController.prototype, "update", null);
    __decorate([
        (0, common_1.Delete)(':id'),
        __param(0, (0, common_1.Param)('id')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], PedidoController.prototype, "remove", null);
    PedidoController = __decorate([
        (0, common_1.Controller)('pedido'),
        __metadata("design:paramtypes", [pedido_service_1.PedidoService])
    ], PedidoController);
    return PedidoController;
}());
exports.PedidoController = PedidoController;
//# sourceMappingURL=pedido.controller.js.map