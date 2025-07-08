const empleosPaths = {
  '/api/empleos': {
    get: {
      tags: ['Empleos'],
      summary: 'Listar todos los empleos',
      responses: {
        200: { description: 'Lista de empleos' },
      },
    },
    post: {
      tags: ['Empleos'],
      summary: 'Crear un empleo',
      requestBody: {
        required: true,
        content: {
          'application/json': {
            schema: {
              allOf: [
                { $ref: '#/components/schemas/Empleo' },
                {
                  type: 'object',
                  properties: {
                    ID: { readOnly: true },
                  },
                },
              ],
            },
          },
        },
      },
      responses: {
        201: { description: 'Empleo creado' },
        400: { description: 'Error de validación' },
      },
    },
  },
  '/api/empleos/{id}': {
    get: {
      tags: ['Empleos'],
      summary: 'Obtener empleo por ID',
      parameters: [
        {
          name: 'id',
          in: 'path',
          required: true,
          schema: { type: 'integer' },
        },
      ],
      responses: {
        200: { description: 'Empleo encontrado' },
        404: { description: 'Empleo no encontrado' },
      },
    },
    put: {
      tags: ['Empleos'],
      summary: 'Actualizar empleo por ID',
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
            schema: {
              allOf: [
                { $ref: '#/components/schemas/Empleo' },
                {
                  type: 'object',
                  properties: {
                    ID: { readOnly: true },
                    usuario_id: { readOnly: true },
                  },
                },
              ],
            },
          },
        },
      },
      responses: {
        200: { description: 'Empleo actualizado' },
        400: { description: 'Error de validación' },
      },
    },
    delete: {
      tags: ['Empleos'],
      summary: 'Eliminar empleo por ID',
      parameters: [
        {
          name: 'id',
          in: 'path',
          required: true,
          schema: { type: 'integer' },
        },
      ],
      responses: {
        204: { description: 'Empleo eliminado' },
        400: { description: 'Error al eliminar' },
      },
    },
  },
  '/api/empleos/usuario/{usuario_id}': {
    get: {
      tags: ['Empleos'],
      summary: 'Obtener empleos por ID de usuario',
      parameters: [
        {
          name: 'usuario_id',
          in: 'path',
          required: true,
          schema: { type: 'string' },
        },
      ],
      responses: {
        200: { description: 'Lista de empleos del usuario' },
        404: { description: 'No se encontraron empleos' },
      },
    },
  },
};

export default empleosPaths;
