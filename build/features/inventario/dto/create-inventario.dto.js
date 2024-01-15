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
exports.CreateInventarioDto = void 0;
// create-inventario.dto.ts
var class_validator_1 = require("class-validator");
var CreateInventarioDto = /** @class */ (function () {
    function CreateInventarioDto() {
    }
    __decorate([
        (0, class_validator_1.IsNumber)(),
        (0, class_validator_1.IsNotEmpty)(),
        __metadata("design:type", Number)
    ], CreateInventarioDto.prototype, "lote", void 0);
    __decorate([
        (0, class_validator_1.IsDate)(),
        (0, class_validator_1.IsNotEmpty)(),
        __metadata("design:type", Date)
    ], CreateInventarioDto.prototype, "fechaCaducidad", void 0);
    __decorate([
        (0, class_validator_1.IsDate)(),
        (0, class_validator_1.IsNotEmpty)(),
        __metadata("design:type", Date)
    ], CreateInventarioDto.prototype, "fechaFabricacion", void 0);
    __decorate([
        (0, class_validator_1.IsNumber)(),
        (0, class_validator_1.IsNotEmpty)(),
        __metadata("design:type", Number)
    ], CreateInventarioDto.prototype, "cantidadExistencias", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsNotEmpty)(),
        __metadata("design:type", String)
    ], CreateInventarioDto.prototype, "ubicacion", void 0);
    return CreateInventarioDto;
}());
exports.CreateInventarioDto = CreateInventarioDto;
//# sourceMappingURL=create-inventario.dto.js.map