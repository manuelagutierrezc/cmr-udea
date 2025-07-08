import garantiasPaths from "../../swagger/paths/garantias";
import reingresosUsuarioPaths from "../../swagger/paths/reingresosUsuario";
import direccionPaths from "../../swagger/paths/direcciones.js";

import garantiaSchema from "../../swagger/schemas/garantia.js";
import reingresoUsuarioSchema from "../../swagger/schemas/reingresoUsuario";
import direccionSchema from "../../swagger/schemas/direccionUsuario.js";

export default function handler(req, res) {
  const swaggerDocument = {
    openapi: "3.0.0",
    info: {
      title: "CRM API",
      version: "1.0.0",
      description: "Documentación de las APIs del CRM UdeA",
    },
    servers: [
      {
        url: "http://localhost:3000",
        description: "Servidor local",
      },
    ],
    paths: {
      ...direccionPaths,
      ...reingresosUsuarioPaths,
      ...garantiasPaths,
      

      
      "/api/tarjetas": {
        get: {
          tags: ["Tarjeta Crédito"],
          summary: "Obtener todas las tarjetas",
          responses: {
            200: {
              description: "Lista de tarjetas",
            },
          },
        },
        post: {
          tags: ["Tarjeta Crédito"],
          summary: "Crear una tarjeta",
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: { $ref: "#/components/schemas/TarjetaCredito" },
              },
            },
          },
          responses: {
            201: {
              description: "Tarjeta creada",
            },
          },
        },
      },
      "/api/tarjetas/{id}": {
        get: {
          tags: ["Tarjeta Crédito"],
          summary: "Obtener tarjeta por ID",
          parameters: [{ name: "id", in: "path", required: true, schema: { type: "integer" } }],
          responses: { 200: { description: "Tarjeta encontrada" }, 404: { description: "No encontrada" } },
        },
        put: {
          tags: ["Tarjeta Crédito"],
          summary: "Actualizar tarjeta",
          parameters: [{ name: "id", in: "path", required: true, schema: { type: "integer" } }],
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: { $ref: "#/components/schemas/TarjetaCredito" },
              },
            },
          },
          responses: { 200: { description: "Actualizada" } },
        },
        delete: {
          tags: ["Tarjeta Crédito"],
          summary: "Eliminar tarjeta",
          parameters: [{ name: "id", in: "path", required: true, schema: { type: "integer" } }],
          responses: { 204: { description: "Eliminada" } },
        },
      },
      "/api/tarjetas/usuario/[usuario_id]": {
        get: {
          tags: ["Tarjeta Crédito"],
          summary: "Buscar tarjetas por identificación de usuario",
          parameters: [{ name: "usuario_id", in: "path", required: true, schema: { type: "string" } }],
          responses: { 200: { description: "Lista de tarjetas del usuario" } },
        },
      },



      "/api/creditos-usuario": {
        "get": {
          "summary": "Listar todos los créditos de usuario",
          "tags": ["Créditos Usuario"],
          "responses": {
            "200": {
              "description": "Lista de créditos usuario",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/CreditoUsuario"
                    }
                  }
                }
              }
            }
          }
        },
        "post": {
          "summary": "Crear un nuevo crédito usuario",
          "tags": ["Créditos Usuario"],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/CreditoUsuario"
                }
              }
            }
          },
          "responses": {
            "201": {
              "description": "Crédito usuario creado"
            },
            "400": {
              "description": "Error en la creación"
            }
          }
        }
      },
      "/api/creditos-usuario/{id}": {
        "get": {
          "summary": "Obtener un crédito usuario por ID",
          "tags": ["Créditos Usuario"],
          "parameters": [
            {
              "name": "id",
              "in": "path",
              "required": true,
              "schema": {
                "type": "integer"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "Crédito usuario encontrado",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/CreditoUsuario"
                  }
                }
              }
            },
            "404": {
              "description": "Crédito usuario no encontrado"
            }
          }
        },
        "put": {
          "summary": "Actualizar un crédito usuario por ID",
          "tags": ["Créditos Usuario"],
          "parameters": [
            {
              "name": "id",
              "in": "path",
              "required": true,
              "schema": {
                "type": "integer"
              }
            }
          ],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/CreditoUsuario"
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": "Crédito usuario actualizado"
            },
            "400": {
              "description": "Error al actualizar"
            }
          }
        },
        "delete": {
          "summary": "Eliminar un crédito usuario por ID",
          "tags": ["Créditos Usuario"],
          "parameters": [
            {
              "name": "id",
              "in": "path",
              "required": true,
              "schema": {
                "type": "integer"
              }
            }
          ],
          "responses": {
            "204": {
              "description": "Crédito usuario eliminado"
            },
            "404": {
              "description": "Crédito usuario no encontrado"
            }
          }
        }
      },



      "/api/creditos": {
        get: {
          summary: "Listar todos los créditos",
          tags: ["Créditos"],
          responses: {
            200: {
              description: "Lista de créditos",
              content: {
                "application/json": {
                  schema: {
                    type: "array",
                    items: { $ref: "#/components/schemas/CreditoPrestamo" }
                  }
                }
              }
            }
          }
        },
        post: {
          summary: "Crear un nuevo crédito",
          tags: ["Créditos"],
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: { $ref: "#/components/schemas/CreditoPrestamoInput" }
              }
            }
          },
          responses: {
            201: {
              description: "Crédito creado exitosamente",
              content: {
                "application/json": {
                  schema: { $ref: "#/components/schemas/CreditoPrestamo" }
                }
              }
            },
            400: {
              description: "Error en los datos de entrada"
            }
          }
        }
      },



      "/api/creditos/usuario/{identificacion}": {
        get: {
          summary: "Obtener créditos por identificación de usuario",
          tags: ["Credito Prestamo"],
          parameters: [
            {
              name: "identificacion",
              in: "path",
              required: true,
              schema: { type: "string" },
            },
          ],
          responses: {
            200: {
              description: "Créditos asociados al usuario",
              content: {
                "application/json": {
                  schema: {
                    type: "array",
                    items: { $ref: "#/components/schemas/CreditoPrestamo" },
                  },
                },
              },
            },
            404: {
              description: "Usuario no encontrado o sin créditos",
            },
          },
        },
      },
      "/api/creditos/{id}": {
        get: {
          summary: "Obtener un crédito por ID",
          tags: ["Credito Prestamo"],
          parameters: [
            {
              name: "id",
              in: "path",
              required: true,
              schema: { type: "integer" },
            },
          ],
          responses: {
            200: {
              description: "Crédito encontrado",
              content: {
                "application/json": {
                  schema: { $ref: "#/components/schemas/CreditoPrestamo" },
                },
              },
            },
            404: {
              description: "Crédito no encontrado",
            },
          },
        },
        put: {
          summary: "Actualizar un crédito por ID",
          tags: ["Credito Prestamo"],
          parameters: [
            {
              name: "id",
              in: "path",
              required: true,
              schema: { type: "integer" },
            },
          ],
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: { $ref: "#/components/schemas/CreditoPrestamo" },
              },
            },
          },
          responses: {
            200: { description: "Crédito actualizado" },
            404: { description: "Crédito no encontrado" },
          },
        },
        delete: {
          summary: "Eliminar un crédito por ID",
          tags: ["Credito Prestamo"],
          parameters: [
            {
              name: "id",
              in: "path",
              required: true,
              schema: { type: "integer" },
            },
          ],
          responses: {
            200: { description: "Crédito eliminado" },
            404: { description: "Crédito no encontrado" },
          },
        },
      },


      '/api/auth/login': {
        post: {
          tags: ['Autenticación'],
          summary: 'Inicio de sesión',
          description: 'Permite autenticar a un usuario usando correo y contraseña.',
          requestBody: {
            required: true,
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  required: ['ADDRESSLINE_MAIL', 'PASSWORD'],
                  properties: {
                    ADDRESSLINE_MAIL: {
                      type: 'string',
                      format: 'email',
                      example: 'usuario@ejemplo.com',
                    },
                    PASSWORD: {
                      type: 'string',
                      example: 'contraseña123',
                    },
                  },
                },
              },
            },
          },
          responses: {
            200: {
              description: 'Autenticación exitosa',
              content: {
                'application/json': {
                  schema: {
                    type: 'object',
                    properties: {
                      message: { type: 'string', example: 'Autenticación exitosa' },
                    },
                  },
                },
              },
            },
            400: {
              description: 'Faltan credenciales',
              content: {
                'application/json': {
                  schema: {
                    type: 'object',
                    properties: {
                      error: { type: 'string', example: 'Faltan credenciales' },
                    },
                  },
                },
              },
            },
            401: {
              description: 'Credenciales inválidas',
              content: {
                'application/json': {
                  schema: {
                    type: 'object',
                    properties: {
                      error: { type: 'string', example: 'Credenciales inválidas' },
                    },
                  },
                },
              },
            },
            500: {
              description: 'Error interno del servidor',
              content: {
                'application/json': {
                  schema: {
                    type: 'object',
                    properties: {
                      error: { type: 'string', example: 'Error interno del servidor' },
                    },
                  },
                },
              },
            },
          },
        },
      },






      '/api/usuarios/{identificacion}': {
        get: {
          tags: ['Usuarios'],
          summary: 'Obtener un usuario por ID',
          description: 'Retorna los datos de un usuario específico por su ID.',
          parameters: [
            {
              name: 'identificacion',
              in: 'path',
              required: true,
              schema: {
                type: 'integer'
              },
              description: 'ID del usuario a obtener'
            }
          ],
          responses: {
            200: {
              description: 'Usuario obtenido correctamente',
              content: {
                'application/json': {
                  schema: {
                    $ref: '#/components/schemas/Usuario'
                  }
                }
              }
            },
            404: {
              description: 'Usuario no encontrado'
            },
            500: {
              description: 'Error interno del servidor'
            }
          }
        },

        put: {
          tags: ['Usuarios'],
          summary: 'Actualizar un usuario por ID',
          description: 'Actualiza los datos de un usuario específico por su ID.',
          parameters: [
            {
              name: 'identificacion',
              in: 'path',
              required: true,
              schema: {
                type: 'integer'
              },
              description: 'ID del usuario a actualizar'
            }
          ],
          requestBody: {
            required: true,
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/UsuarioInput'
                }
              }
            }
          },
          responses: {
            200: {
              description: 'Usuario actualizado correctamente',
              content: {
                'application/json': {
                  schema: {
                    $ref: '#/components/schemas/Usuario'
                  }
                }
              }
            },
            400: {
              description: 'Error de validación de datos'
            },
            404: {
              description: 'Usuario no encontrado'
            },
            500: {
              description: 'Error interno del servidor'
            }
          }
        },

        delete: {
          tags: ['Usuarios'],
          summary: 'Eliminar un usuario por ID',
          description: 'Elimina un usuario específico por su ID.',
          parameters: [
            {
              name: 'identificacion',
              in: 'path',
              required: true,
              schema: {
                type: 'integer'
              },
              description: 'ID del usuario a eliminar'
            }
          ],
          responses: {
            204: {
              description: 'Usuario eliminado correctamente (sin contenido)'
            },
            404: {
              description: 'Usuario no encontrado'
            },
            500: {
              description: 'Error interno del servidor'
            }
          }
        }
      },

      "/api/usuarios": {
        get: {
          tags: ["Usuarios"],
          summary: "Obtener todos los usuarios",
          description: "Retorna una lista con todos los usuarios registrados en el sistema.",
          responses: {
            200: {
              description: "Lista de usuarios obtenida correctamente",
              content: {
                "application/json": {
                  schema: {
                    type: "array",
                    items: { $ref: "#/components/schemas/Usuario" },
                  },
                },
              },
            },
            500: {
              description: "Error interno al obtener usuarios",
            },
          },
        },
        post: {
          tags: ["Usuarios"],
          summary: "Crear un nuevo usuario",
          description: "Crea un nuevo usuario con los datos proporcionados en el cuerpo de la solicitud.",
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: { $ref: "#/components/schemas/UsuarioInput" },
              },
            },
          },
          responses: {
            201: {
              description: "Usuario creado correctamente",
              content: {
                "application/json": {
                  schema: { $ref: "#/components/schemas/Usuario" },
                },
              },
            },
            400: {
              description: "Error al crear usuario",
            },
          },
        },
      },
    },
    components: {
      schemas: {
        ...direccionSchema,
        ...garantiaSchema,
        ...reingresoUsuarioSchema,



        TarjetaCredito: {
          type: "object",
          properties: {
            usuario_id: { type: "string" },
            credito_usuario_id: { type: "integer" },
            TARJCREDCUPROT: { type: "string" },
            ENTOTORGARANT: { type: "string" },
          },
        },



        CreditoUsuario: {
          "type": "object",
          "properties": {
            "ID": { "type": "integer" },
            "TipoIden": { "type": "string", "nullable": true },
            "NIT": { "type": "string", "nullable": true },
            "CodigoContable": { "type": "integer", "nullable": true },
            "ModificacionesAlCredito": { "type": "number", "format": "float", "nullable": true },
            "NroCredito": { "type": "string", "nullable": true },
            "FechaDesembolsoInicial": { "type": "string", "format": "date-time", "nullable": true },
            "FechaVencimiento": { "type": "string", "format": "date-time", "nullable": true },
            "Morosidad": { "type": "number", "format": "float", "nullable": true },
            "TipoCuota": { "type": "string", "nullable": true },
            "AlturaCuota": { "type": "number", "format": "float", "nullable": true },
            "Amortizacion": { "type": "number", "format": "float", "nullable": true },
            "Modalidad": { "type": "string", "nullable": true },
            "TasaInteresEfectiva": { "type": "number", "format": "float", "nullable": true },
            "ValorPrestamo": { "type": "number", "format": "float", "nullable": true },
            "ValorCuotaFija": { "type": "number", "format": "float", "nullable": true },
            "SaldoCapital": { "type": "number", "format": "float", "nullable": true },
            "SaldoIntereses": { "type": "number", "format": "float", "nullable": true },
            "OtrosSaldos": { "type": "number", "format": "float", "nullable": true },
            "ValorMora": { "type": "number", "format": "float", "nullable": true },
            "ValosCuotasExtra": { "type": "number", "format": "float", "nullable": true },
            "MesesCuotaExtra": { "type": "number", "format": "float", "nullable": true },
            "fechaultimopago": { "type": "string", "format": "date-time", "nullable": true }
          }
        },




        CreditoPrestamo: {
          type: "object",
          properties: {
            ID: { type: "integer" },
            usuario_id: { type: "string" },
            credito_usuario_id: { type: "integer", nullable: true },
            clasegarantia: { type: "string", nullable: true },
            destinocredito: { type: "string", nullable: true },
            CodOficina: { type: "string", nullable: true },
            AmortiCapital: { type: "number", nullable: true },
            TipoVivienda: { type: "string", nullable: true },
            VIS: { type: "number", nullable: true },
            RangoTipo: { type: "string", nullable: true },
            EntidadRedescuento: { type: "string", nullable: true },
            MargenRedescuento: { type: "number", nullable: true },
            Subsidio: { type: "string", nullable: true },
            Desembolso: { type: "string", nullable: true },
            Moneda: { type: "string", nullable: true },
            AportesSociales: { type: "number", nullable: true },
            LineaCredEntidad: { type: "string", nullable: true },
            NumModificaciones: { type: "number", nullable: true },
            Estadocredito: { type: "string", nullable: true },
            NITPatronal: { type: "string", nullable: true },
            NombrePatronal: { type: "string", nullable: true }
          }
        },
        CreditoPrestamoInput: {
          type: "object",
          required: ["usuario_id"],
          properties: {
            usuario_id: { type: "string" },
            credito_usuario_id: { type: "integer" },
            clasegarantia: { type: "string" },
            destinocredito: { type: "string" },
            CodOficina: { type: "string" },
            AmortiCapital: { type: "number" },
            TipoVivienda: { type: "string" },
            VIS: { type: "number" },
            RangoTipo: { type: "string" },
            EntidadRedescuento: { type: "string" },
            MargenRedescuento: { type: "number" },
            Subsidio: { type: "string" },
            Desembolso: { type: "string" },
            Moneda: { type: "string" },
            AportesSociales: { type: "number" },
            LineaCredEntidad: { type: "string" },
            NumModificaciones: { type: "number" },
            Estadocredito: { type: "string" },
            NITPatronal: { type: "string" },
            NombrePatronal: { type: "string" }
          }
        },




        Usuario: {
          type: "object",
          properties: {
            ID: { type: "integer" },
            TIPO_IDENTIFICACION: { type: "string" },
            ACTA_INGRESO: { type: "string" },
            IDENTIFICACION: { type: "string" },
            ESTADO_CIVIL: { type: "string" },
            PAIS_NACIMIENTO: { type: "string" },
            RAZONSOCIAL: { type: "string" },
            PERSONAS_A_CARGO: { type: "integer" },
            DEPARTAMENTO_NACIMIENTO: { type: "string" },
            GENERO: { type: "string" },
            ADDRESSLINE_MAIL: { type: "string", format: "email" },
            MUNICIPIO_NACIMIENTO: { type: "string" },
            PAIS_IDENTIFICACION: { type: "string" },
            DIRECCION_RESIDENCIA: { type: "string" },
            TIPO_VIVIENDA: { type: "string" },
            LUGAR_EXPEDICION: { type: "string" },
            PAIS_RESIDENCIA: { type: "string" },
            ESTRATO: { type: "integer" },
            FECHA_NACIMIENTO: { type: "string", format: "date-time" },
            DEPARTAMENTO_RESIDENCIA: { type: "string" },
            OCUPACION: { type: "string" },
            FECHA_INGRESO: { type: "string", format: "date-time" },
            CIUDAD_RESIDENCIA: { type: "string" },
            NIVEL_ACADEMICO: { type: "string" },
            EDAD: { type: "integer" },
            ADDRESSLINE_CELULAR: { type: "string" },
            CODIGO_VERIFICACION: { type: "string" },
            CLIENTE: { type: "boolean" },
            TERCERO: { type: "boolean" },
            CODEUCOR_NA: { type: "string" },
            EMPLEADO: { type: "boolean" },
            ASOCIADO: { type: "boolean" },
            PROVEEDOR: { type: "boolean" },
            PRIMER_NOMBRE: { type: "string" },
            SEGUNDO_NOMBRE: { type: "string" },
            PRIMER_APELLIDO: { type: "string" },
            SEGUNDO_APELLIDO: { type: "string" },
            SUCURSAL: { type: "string" },
            ESTADO: { type: "string" },
            ULTIMA_ACTUALIZACION: { type: "string", format: "date-time" },
            NACIONALIDAD: { type: "string" },
            NUMERO_HIJOS: { type: "integer" },
            MAXIMO_TITULO: { type: "string" },
            CONYUGUE: { type: "string" }
          },
        },
        UsuarioInput: {
          type: "object",
          required: [
            "TIPO_IDENTIFICACION",
            "ACTA_INGRESO",
            "IDENTIFICACION",
            "PASSWORD",
            "ESTADO_CIVIL",
            "PAIS_NACIMIENTO",
            "ADDRESSLINE_MAIL",
            "FECHA_NACIMIENTO"
          ],
          properties: {
            TIPO_IDENTIFICACION: { type: "string" },
            ACTA_INGRESO: { type: "string" },
            IDENTIFICACION: { type: "string" },
            PASSWORD: { type: "string", format: "password" },
            ESTADO_CIVIL: { type: "string" },
            PAIS_NACIMIENTO: { type: "string" },
            RAZONSOCIAL: { type: "string" },
            PERSONAS_A_CARGO: { type: "integer" },
            DEPARTAMENTO_NACIMIENTO: { type: "string" },
            GENERO: { type: "string" },
            ADDRESSLINE_MAIL: { type: "string", format: "email" },
            MUNICIPIO_NACIMIENTO: { type: "string" },
            PAIS_IDENTIFICACION: { type: "string" },
            DIRECCION_RESIDENCIA: { type: "string" },
            TIPO_VIVIENDA: { type: "string" },
            LUGAR_EXPEDICION: { type: "string" },
            PAIS_RESIDENCIA: { type: "string" },
            ESTRATO: { type: "integer" },
            FECHA_NACIMIENTO: { type: "string", format: "date-time" },
            DEPARTAMENTO_RESIDENCIA: { type: "string" },
            OCUPACION: { type: "string" },
            FECHA_INGRESO: { type: "string", format: "date-time" },
            CIUDAD_RESIDENCIA: { type: "string" },
            NIVEL_ACADEMICO: { type: "string" },
            EDAD: { type: "integer" },
            ADDRESSLINE_CELULAR: { type: "string" },
            CODIGO_VERIFICACION: { type: "string" },
            CLIENTE: { type: "boolean" },
            TERCERO: { type: "boolean" },
            CODEUCOR_NA: { type: "string" },
            EMPLEADO: { type: "boolean" },
            ASOCIADO: { type: "boolean" },
            PROVEEDOR: { type: "boolean" },
            PRIMER_NOMBRE: { type: "string" },
            SEGUNDO_NOMBRE: { type: "string" },
            PRIMER_APELLIDO: { type: "string" },
            SEGUNDO_APELLIDO: { type: "string" },
            SUCURSAL: { type: "string" },
            ESTADO: { type: "string" },
            ULTIMA_ACTUALIZACION: { type: "string", format: "date-time" },
            NACIONALIDAD: { type: "string" },
            NUMERO_HIJOS: { type: "integer" },
            MAXIMO_TITULO: { type: "string" },
            CONYUGUE: { type: "string" }
          }
        }
      }
    }
  };

  res.status(200).json(swaggerDocument);
}
