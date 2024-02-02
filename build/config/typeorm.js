"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata");
var typeorm_1 = require("typeorm");
var user_entity_1 = require("../entities/user.entity");
var administrador_entity_1 = require("../entities/administrador.entity");
var dispositivo_entity_1 = require("../entities/dispositivo.entity");
var insumo_medico_entity_1 = require("../entities/insumo-medico.entity");
var inventario_entity_1 = require("../entities/inventario.entity");
var medicamento_entity_1 = require("../entities/medicamento.entity");
var producto_medico_entity_1 = require("../entities/producto-medico.entity");
var usuario_autorizado_entity_1 = require("../entities/usuario-autorizado.entity");
var log_entity_1 = require("../entities/log.entity");
exports.AppDataSource = new typeorm_1.DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '',
    database: 'mspdb',
    synchronize: true,
    logging: true,
    entities: [
        user_entity_1.User,
        administrador_entity_1.Administrador,
        dispositivo_entity_1.Dispositivo,
        insumo_medico_entity_1.Insumo,
        inventario_entity_1.Inventario,
        medicamento_entity_1.Medicamento,
        producto_medico_entity_1.ProductoMedico,
        usuario_autorizado_entity_1.UsuarioAutorizado,
        log_entity_1.InventarioUpdateLog,
    ],
    migrations: [],
    subscribers: [],
});
//# sourceMappingURL=typeorm.js.map