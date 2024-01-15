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
exports.DispositivoMedicoController = void 0;
var common_1 = require("@nestjs/common");
var dispositivo_medico_service_1 = require("./dispositivo-medico.service");
var create_dispositivo_medico_dto_1 = require("./dto/create-dispositivo-medico.dto");
var update_dispositivo_medico_dto_1 = require("./dto/update-dispositivo-medico.dto");
var DispositivoMedicoController = /** @class */ (function () {
    function DispositivoMedicoController(dispositivoMedicoService) {
        this.dispositivoMedicoService = dispositivoMedicoService;
    }
    DispositivoMedicoController.prototype.create = function (createDispositivoMedicoDto) {
        return this.dispositivoMedicoService.create(createDispositivoMedicoDto);
    };
    DispositivoMedicoController.prototype.findAll = function () {
        return this.dispositivoMedicoService.findAll();
    };
    DispositivoMedicoController.prototype.findOne = function (id) {
        return this.dispositivoMedicoService.findOne(id);
    };
    DispositivoMedicoController.prototype.update = function (id, updateDispositivoMedicoDto) {
        return this.dispositivoMedicoService.update(+id, updateDispositivoMedicoDto);
    };
    DispositivoMedicoController.prototype.remove = function (id) {
        return this.dispositivoMedicoService.destroy(id);
    };
    __decorate([
        (0, common_1.Post)(),
        __param(0, (0, common_1.Body)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [create_dispositivo_medico_dto_1.CreateDispositivoMedicoDto]),
        __metadata("design:returntype", void 0)
    ], DispositivoMedicoController.prototype, "create", null);
    __decorate([
        (0, common_1.Get)(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], DispositivoMedicoController.prototype, "findAll", null);
    __decorate([
        (0, common_1.Get)(':id'),
        __param(0, (0, common_1.Param)('id')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", Promise)
    ], DispositivoMedicoController.prototype, "findOne", null);
    __decorate([
        (0, common_1.Patch)(':id'),
        __param(0, (0, common_1.Param)('id')),
        __param(1, (0, common_1.Body)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, update_dispositivo_medico_dto_1.UpdateDispositivoMedicoDto]),
        __metadata("design:returntype", void 0)
    ], DispositivoMedicoController.prototype, "update", null);
    __decorate([
        (0, common_1.Delete)(':id'),
        __param(0, (0, common_1.Param)('id')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], DispositivoMedicoController.prototype, "remove", null);
    DispositivoMedicoController = __decorate([
        (0, common_1.Controller)('dispositivo-medico'),
        __metadata("design:paramtypes", [dispositivo_medico_service_1.DispositivoMedicoService])
    ], DispositivoMedicoController);
    return DispositivoMedicoController;
}());
exports.DispositivoMedicoController = DispositivoMedicoController;
//# sourceMappingURL=dispositivo-medico.controller.js.map