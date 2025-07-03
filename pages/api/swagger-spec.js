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
