const pqrPaths = {
  '/api/pqr': {
    get: {
      tags: ['PQR'],
      summary: 'Listar todos los PQRs',
      responses: {
        200: {
          description: 'Lista de PQRs',
        },
      },
    },
    post: {
      tags: ['PQR'],
      summary: 'Crear un nuevo PQR',
      requestBody: {
        required: true,
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/PqrCreate',
            },
          },
        },
      },
      responses: {
        201: {
          description: 'PQR creado exitosamente',
        },
      },
    },
  },
  '/api/pqr/{id}': {
    get: {
      tags: ['PQR'],
      summary: 'Obtener un PQR por ID',
      parameters: [
        {
          name: 'id',
          in: 'path',
          required: true,
          schema: { type: 'integer' },
        },
      ],
      responses: {
        200: { description: 'PQR encontrado' },
        404: { description: 'PQR no encontrado' },
      },
    },
    put: {
      tags: ['PQR'],
      summary: 'Actualizar un PQR',
      parameters: [
        {
          name: 'id',
          in: 'path',
          required: true,
          schema: { type: 'integer' },
        },
      ],
      requestBody: {
        required: true,
        content: {
          'application/json': {
            schema: { $ref: '#/components/schemas/PqrUpdate' },
          },
        },
      },
      responses: {
        200: { description: 'PQR actualizado' },
        400: { description: 'Error en la solicitud' },
      },
    },
    delete: {
      tags: ['PQR'],
      summary: 'Eliminar un PQR',
      parameters: [
        {
          name: 'id',
          in: 'path',
          required: true,
          schema: { type: 'integer' },
        },
      ],
      responses: {
        204: { description: 'PQR eliminado' },
        400: { description: 'Error al eliminar' },
      },
    },
  },
  '/api/pqr/usuario/{usuario_id}': {
    get: {
      tags: ['PQR'],
      summary: 'Obtener PQRs por usuario',
      parameters: [
        {
          name: 'usuario_id',
          in: 'path',
          required: true,
          schema: { type: 'string' },
        },
      ],
      responses: {
        200: { description: 'Lista de PQRs del usuario' },
        404: { description: 'No se encontraron PQRs' },
      },
    },
  },
};

export default pqrPaths;
