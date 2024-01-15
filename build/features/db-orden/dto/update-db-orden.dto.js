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
exports.UpdateDbOrdenDto = void 0;
var mapped_types_1 = require("@nestjs/mapped-types");
var create_db_orden_dto_1 = require("./create-db-orden.dto");
var UpdateDbOrdenDto = /** @class */ (function (_super) {
    __extends(UpdateDbOrdenDto, _super);
    function UpdateDbOrdenDto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return UpdateDbOrdenDto;
}((0, mapped_types_1.PartialType)(create_db_orden_dto_1.CreateDbOrdenDto)));
exports.UpdateDbOrdenDto = UpdateDbOrdenDto;
//# sourceMappingURL=update-db-orden.dto.js.map