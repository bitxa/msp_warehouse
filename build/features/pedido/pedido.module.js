"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PedidoModule = void 0;
var common_1 = require("@nestjs/common");
var producto_service_1 = require("./producto.service");
var producto_controller_1 = require("./producto.controller");
var PedidoModule = /** @class */ (function () {
    function PedidoModule() {
    }
    PedidoModule = __decorate([
        (0, common_1.Module)({
            controllers: [producto_controller_1.PedidoController],
            providers: [producto_service_1.PedidoService],
        })
    ], PedidoModule);
    return PedidoModule;
}());
exports.PedidoModule = PedidoModule;
//# sourceMappingURL=pedido.module.js.map