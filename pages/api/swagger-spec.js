// pages/api/swagger-spec.js

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
      '/api/auth/login': {
    post: {
      tags: ['Autenticación'],
      summary: 'Login de usuario',
      description: 'Permite autenticar a un usuario mediante su correo y contraseña.',
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
                  example: 'usuario@ejemplo.com'
                },
                PASSWORD: {
                  type: 'string',
                  example: 'mi_contraseña_segura'
                }
              }
            }
          }
        }
      },
      responses: {
        200: {
          description: 'Autenticación exitosa',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  message: { type: 'string', example: 'Autenticación exitosa' }
                }
              }
            }
          }
        },
        400: {
          description: 'Faltan credenciales o formato incorrecto'
        },
        401: {
          description: 'Credenciales inválidas'
        },
        500: {
          description: 'Error interno del servidor'
        }
      }
    }
  },  
      "/api/usuario/{identificacion}": {
        get: {
          tags: ["Usuario"],
          summary: "Obtener un usuario por IDENTIFICACION",
          parameters: [
            {
              name: "identificacion",
              in: "path",
              required: true,
              schema: {
                type: "string",
              },
              description: "Cédula del usuario",
            },
          ],
          responses: {
            200: {
              description: "Usuario encontrado",
              content: {
                "application/json": {
                  example: {
                    IDENTIFICACION: "123456789",
                    PRIMER_NOMBRE: "Juan",
                    PRIMER_APELLIDO: "Pérez",
                    CLIENTE: true,
                    EMPLEADO: false,
                  },
                },
              },
            },
            404: {
              description: "Usuario no encontrado",
            },
          },
        },
      },
    },
  };
  

  res.status(200).json(swaggerDocument);
}

