
const reingresosUsuarioPaths = {
  '/api/reingresos-usuario': {
    get: {
      tags: ['Reingresos Usuario'],
      summary: 'Listar todos los reingresos de usuario',
      responses: {
        200: {
          description: 'Lista de reingresos',
          content: {
            'application/json': {
              schema: {
                type: 'array',
                items: { $ref: '#/components/schemas/ReingresoUsuario' },
              },
            },
          },
        },
      },
    },
    post: {
      tags: ['Reingresos Usuario'],
      summary: 'Crear un nuevo reingreso',
      requestBody: {
        required: true,
        content: {
          'application/json': {
            schema: { $ref: '#/components/schemas/ReingresoUsuarioInput' },
          },
        },
      },
      responses: {
        201: { description: 'Reingreso creado' },
        400: { description: 'Error al crear reingreso' },
      },
    },
  },
  '/api/reingresos-usuario/{id}': {
    get: {
      tags: ['Reingresos Usuario'],
      summary: 'Obtener un reingreso por ID',
      parameters: [
        { name: 'id', in: 'path', required: true, schema: { type: 'integer' } },
      ],
      responses: {
        200: {
          description: 'Reingreso encontrado',
          content: {
            'application/json': {
              schema: { $ref: '#/components/schemas/ReingresoUsuario' },
            },
          },
        },
        404: { description: 'Reingreso no encontrado' },
      },
    },
    put: {
      tags: ['Reingresos Usuario'],
      summary: 'Actualizar un reingreso por ID',
      parameters: [
        { name: 'id', in: 'path', required: true, schema: { type: 'integer' } },
      ],
      requestBody: {
        required: true,
        content: {
          'application/json': {
            schema: { $ref: '#/components/schemas/ReingresoUsuarioInput' },
          },
        },
      },
      responses: {
        200: { description: 'Reingreso actualizado' },
        400: { description: 'Error al actualizar' },
      },
    },
    delete: {
      tags: ['Reingresos Usuario'],
      summary: 'Eliminar un reingreso por ID',
      parameters: [
        { name: 'id', in: 'path', required: true, schema: { type: 'integer' } },
      ],
      responses: {
        204: { description: 'Reingreso eliminado' },
        400: { description: 'Error al eliminar' },
      },
    },
  },
  '/api/reingresos-usuario/usuario/{usuario_id}': {
    get: {
      tags: ['Reingresos Usuario'],
      summary: 'Obtener reingresos por ID de usuario',
      parameters: [
        { name: 'usuario_id', in: 'path', required: true, schema: { type: 'integer' } },
      ],
      responses: {
        200: {
          description: 'Reingresos encontrados',
          content: {
            'application/json': {
              schema: {
                type: 'array',
                items: { $ref: '#/components/schemas/ReingresoUsuario' },
              },
            },
          },
        },
        404: { description: 'No encontrados' },
      },
    },
  },
};

export default reingresosUsuarioPaths;
