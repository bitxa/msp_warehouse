"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
exports.DbOrdenService = void 0;
// db-orden.service.ts
var common_1 = require("@nestjs/common");
var typeorm_1 = require("@nestjs/typeorm");
var typeorm_2 = require("typeorm");
var db_orden_entity_1 = require("../../entities/db-orden.entity");
var DbOrdenService = /** @class */ (function () {
    function DbOrdenService(dbOrdenRepository) {
        this.dbOrdenRepository = dbOrdenRepository;
    }
    DbOrdenService.prototype.create = function (createDbOrdenDto) {
        var dbOrden = this.dbOrdenRepository.create(createDbOrdenDto);
        return this.dbOrdenRepository.save(dbOrden);
    };
    DbOrdenService.prototype.findAll = function () {
        return this.dbOrdenRepository.find({
            relations: ['ordenesReubicacion'],
        });
    };
    DbOrdenService.prototype.findOne = function (id) {
        return this.dbOrdenRepository.findOneBy({ id: id });
    };
    DbOrdenService.prototype.update = function (id, updateDbOrdenDto) {
        return this.dbOrdenRepository.save(__assign({ id: id }, updateDbOrdenDto));
    };
    DbOrdenService.prototype.remove = function (id) {
        return this.dbOrdenRepository.delete(id).then(function () { });
    };
    DbOrdenService = __decorate([
        (0, common_1.Injectable)(),
        __param(0, (0, typeorm_1.InjectRepository)(db_orden_entity_1.DbOrden)),
        __metadata("design:paramtypes", [typeorm_2.Repository])
    ], DbOrdenService);
    return DbOrdenService;
}());
exports.DbOrdenService = DbOrdenService;
//# sourceMappingURL=db-orden.service.js.map