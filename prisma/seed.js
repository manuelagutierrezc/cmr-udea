"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = require("@prisma/client");
var prisma = new client_1.PrismaClient();
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var adminRole, userRole, usuario1, usuario2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, prisma.rol.upsert({
                        where: { nombre: 'ADMIN' },
                        update: {},
                        create: {
                            nombre: 'ADMIN',
                            descripcion: 'Administrador con todos los permisos',
                        },
                    })];
                case 1:
                    adminRole = _a.sent();
                    return [4 /*yield*/, prisma.rol.upsert({
                            where: { nombre: 'USER' },
                            update: {},
                            create: {
                                nombre: 'USER',
                                descripcion: 'Usuario estándar',
                            },
                        })];
                case 2:
                    userRole = _a.sent();
                    return [4 /*yield*/, prisma.usuario.upsert({
                            where: { IDENTIFICACION: '123456789' },
                            update: {},
                            create: {
                                IDENTIFICACION: '123456789',
                                PRIMER_NOMBRE: 'Juan',
                                PRIMER_APELLIDO: 'Pérez',
                                CLIENTE: true,
                                EMPLEADO: false,
                                FECHA_NACIMIENTO: new Date('1980-01-01'),
                                ESTADO: 'Activo',
                            },
                        })];
                case 3:
                    usuario1 = _a.sent();
                    return [4 /*yield*/, prisma.usuario.upsert({
                            where: { IDENTIFICACION: '987654321' },
                            update: {},
                            create: {
                                IDENTIFICACION: '987654321',
                                PRIMER_NOMBRE: 'Ana',
                                PRIMER_APELLIDO: 'Gómez',
                                CLIENTE: true,
                                EMPLEADO: true,
                                FECHA_NACIMIENTO: new Date('1990-05-15'),
                                ESTADO: 'Activo',
                            },
                        })];
                case 4:
                    usuario2 = _a.sent();
                    // Asignar roles a usuarios
                    return [4 /*yield*/, prisma.usuario_rol.createMany({
                            data: [
                                {
                                    usuario_id: usuario1.ID,
                                    rol_id: userRole.ID,
                                },
                                {
                                    usuario_id: usuario2.ID,
                                    rol_id: adminRole.ID,
                                },
                            ],
                            skipDuplicates: true,
                        })];
                case 5:
                    // Asignar roles a usuarios
                    _a.sent();
                    // Insertar una direccion para usuario1
                    return [4 /*yield*/, prisma.direccion_usuario.create({
                            data: {
                                usuario_id: usuario1.ID,
                                TIPO_ZONA: 'Urbana',
                                DIRECCION_RESIDENCIA: 'Calle 123 #45-67',
                                CIUDAD_RESIDENCIA: 'Medellín',
                                DEPARTAMENTO_RESIDENCIA: 'Antioquia',
                                PAIS_RESIDENCIA: 'Colombia',
                                TELEFONO: '3001234567',
                                ADDRESSLINE_MAIL: 'juan.perez@example.com',
                            },
                        })];
                case 6:
                    // Insertar una direccion para usuario1
                    _a.sent();
                    console.log('Seed ejecutado correctamente');
                    return [2 /*return*/];
            }
        });
    });
}
main()
    .catch(function (e) {
    console.error(e);
    process.exit(1);
})
    .finally(function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, prisma.$disconnect()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
