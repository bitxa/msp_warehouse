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
exports.DbOrdenController = void 0;
var common_1 = require("@nestjs/common");
var db_orden_service_1 = require("./db-orden.service");
var create_db_orden_dto_1 = require("./dto/create-db-orden.dto");
var update_db_orden_dto_1 = require("./dto/update-db-orden.dto");
var DbOrdenController = /** @class */ (function () {
    function DbOrdenController(dbOrdenService) {
        this.dbOrdenService = dbOrdenService;
    }
    DbOrdenController.prototype.create = function (createDbOrdenDto) {
        return this.dbOrdenService.create(createDbOrdenDto);
    };
    DbOrdenController.prototype.findAll = function () {
        return this.dbOrdenService.findAll();
    };
    DbOrdenController.prototype.findOne = function (id) {
        return this.dbOrdenService.findOne(id);
    };
    DbOrdenController.prototype.update = function (id, updateDbOrdenDto) {
        return this.dbOrdenService.update(+id, updateDbOrdenDto);
    };
    DbOrdenController.prototype.remove = function (id) {
        return this.dbOrdenService.destroy(id);
    };
    __decorate([
        (0, common_1.Post)(),
        __param(0, (0, common_1.Body)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [create_db_orden_dto_1.CreateDbOrdenDto]),
        __metadata("design:returntype", void 0)
    ], DbOrdenController.prototype, "create", null);
    __decorate([
        (0, common_1.Get)(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], DbOrdenController.prototype, "findAll", null);
    __decorate([
        (0, common_1.Get)(':id'),
        __param(0, (0, common_1.Param)('id')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", Promise)
    ], DbOrdenController.prototype, "findOne", null);
    __decorate([
        (0, common_1.Patch)(':id'),
        __param(0, (0, common_1.Param)('id')),
        __param(1, (0, common_1.Body)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, update_db_orden_dto_1.UpdateDbOrdenDto]),
        __metadata("design:returntype", void 0)
    ], DbOrdenController.prototype, "update", null);
    __decorate([
        (0, common_1.Delete)(':id'),
        __param(0, (0, common_1.Param)('id')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], DbOrdenController.prototype, "remove", null);
    DbOrdenController = __decorate([
        (0, common_1.Controller)('dbOrden'),
        __metadata("design:paramtypes", [db_orden_service_1.DbOrdenService])
    ], DbOrdenController);
    return DbOrdenController;
}());
exports.DbOrdenController = DbOrdenController;
//# sourceMappingURL=db-orden.controller.js.map