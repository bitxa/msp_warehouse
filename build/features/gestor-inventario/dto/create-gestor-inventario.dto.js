"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateGestorInventarioDto = void 0;
// create-gestor-inventario.dto.ts
var create_personal_almacen_dto_1 = require("../../personal-almacen/dto/create-personal-almacen.dto");
var CreateGestorInventarioDto = /** @class */ (function (_super) {
    __extends(CreateGestorInventarioDto, _super);
    function CreateGestorInventarioDto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CreateGestorInventarioDto;
}(create_personal_almacen_dto_1.CreatePersonalAlmacenDto));
exports.CreateGestorInventarioDto = CreateGestorInventarioDto;
//# sourceMappingURL=create-gestor-inventario.dto.js.map