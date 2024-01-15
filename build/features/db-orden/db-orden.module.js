"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbOrdenModule = void 0;
var common_1 = require("@nestjs/common");
var db_orden_service_1 = require("./db-orden.service");
var db_orden_controller_1 = require("./db-orden.controller");
var DbOrdenModule = /** @class */ (function () {
    function DbOrdenModule() {
    }
    DbOrdenModule = __decorate([
        (0, common_1.Module)({
            controllers: [db_orden_controller_1.DbOrdenController],
            providers: [db_orden_service_1.DbOrdenService],
        })
    ], DbOrdenModule);
    return DbOrdenModule;
}());
exports.DbOrdenModule = DbOrdenModule;
//# sourceMappingURL=db-orden.module.js.map