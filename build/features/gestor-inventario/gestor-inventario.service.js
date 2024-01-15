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
exports.GestorInventarioService = void 0;
// gestor-inventario.service.ts
var common_1 = require("@nestjs/common");
var typeorm_1 = require("@nestjs/typeorm");
var typeorm_2 = require("typeorm");
var gestor_inventario_entity_1 = require("../../entities/gestor-inventario.entity");
var GestorInventarioService = /** @class */ (function () {
    function GestorInventarioService(gestorInventarioRepository) {
        this.gestorInventarioRepository = gestorInventarioRepository;
    }
    GestorInventarioService.prototype.create = function (gestorInventarioData) {
        var gestorInventario = this.gestorInventarioRepository.create(gestorInventarioData);
        return this.gestorInventarioRepository.save(gestorInventario);
    };
    GestorInventarioService.prototype.findAll = function () {
        return this.gestorInventarioRepository.find({
            relations: ['productos', 'inventarios', 'almacenes'],
        });
    };
    GestorInventarioService.prototype.findOne = function (id) {
        return this.gestorInventarioRepository.findOneBy({ idEmpleado: id });
    };
    GestorInventarioService.prototype.update = function (id, updateGestorInventarioData) {
        return this.gestorInventarioRepository.save(__assign({ idEmpleado: id }, updateGestorInventarioData));
    };
    GestorInventarioService.prototype.remove = function (id) {
        return this.gestorInventarioRepository.delete(id).then(function () { });
    };
    GestorInventarioService.prototype.registrarProductos = function () {
        return null;
    };
    GestorInventarioService.prototype.descontinuarProductos = function () {
        return null;
    };
    GestorInventarioService.prototype.generarPedido = function () {
        return null;
    };
    GestorInventarioService.prototype.generarOrden = function () {
        return null;
    };
    GestorInventarioService.prototype.verificarStock = function () {
        return null;
    };
    GestorInventarioService.prototype.generarReportes = function () {
        return null;
    };
    GestorInventarioService = __decorate([
        (0, common_1.Injectable)(),
        __param(0, (0, typeorm_1.InjectRepository)(gestor_inventario_entity_1.GestorInventario)),
        __metadata("design:paramtypes", [typeorm_2.Repository])
    ], GestorInventarioService);
    return GestorInventarioService;
}());
exports.GestorInventarioService = GestorInventarioService;
//# sourceMappingURL=gestor-inventario.service.js.map