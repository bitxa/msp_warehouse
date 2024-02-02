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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
/* eslint-disable @typescript-eslint/no-unused-vars */
var common_1 = require("@nestjs/common");
var app_controller_1 = require("./app.controller");
var app_service_1 = require("./app.service");
var administrador_module_1 = require("./features/administrador/administrador.module");
var inventario_module_1 = require("./features/inventario/inventario.module");
var typeorm_1 = require("@nestjs/typeorm");
var typeorm_2 = require("./config/typeorm");
var producto_medico_module_1 = require("./features/producto-medico/producto-medico.module");
var global_1 = require("./global");
var log_module_1 = require("./features/log/log.module");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        (0, common_1.Module)({
            imports: [
                administrador_module_1.AdministradorModule,
                producto_medico_module_1.ProductoMedicoModule,
                inventario_module_1.InventarioModule,
                log_module_1.InventarioUpdateLogModule,
                typeorm_1.TypeOrmModule.forRootAsync({
                    useFactory: function () { return (__assign({}, typeorm_2.AppDataSource.options)); },
                }),
                global_1.DatabaseModule,
            ],
            controllers: [app_controller_1.AppController],
            providers: [app_service_1.AppService],
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map