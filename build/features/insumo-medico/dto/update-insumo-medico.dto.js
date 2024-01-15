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
exports.UpdateInsumoMedicoDto = void 0;
var mapped_types_1 = require("@nestjs/mapped-types");
var create_insumo_medico_dto_1 = require("./create-insumo-medico.dto");
var UpdateInsumoMedicoDto = /** @class */ (function (_super) {
    __extends(UpdateInsumoMedicoDto, _super);
    function UpdateInsumoMedicoDto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return UpdateInsumoMedicoDto;
}((0, mapped_types_1.PartialType)(create_insumo_medico_dto_1.CreateInsumoMedicoDto)));
exports.UpdateInsumoMedicoDto = UpdateInsumoMedicoDto;
//# sourceMappingURL=update-insumo-medico.dto.js.map