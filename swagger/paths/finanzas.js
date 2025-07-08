const finanzasPaths = {
  '/api/finanzas': {
    get: {
      tags: ['FinanzasPersonales'],
      summary: 'Listar registros financieros',
      responses: {
        200: {
          description: 'Lista de registros financieros',
        },
      },
    },
    post: {
      tags: ['FinanzasPersonales'],
      summary: 'Crear un registro financiero',
      requestBody: {
        required: true,
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/FinanzasPersonalesInput',
            },
          },
        },
      },
      responses: {
        201: {
          description: 'Registro creado exitosamente',
        },
      },
    },
  },
  '/api/finanzas/{id}': {
    get: {
      tags: ['FinanzasPersonales'],
      summary: 'Obtener registro financiero por ID',
      parameters: [
        {
          name: 'id',
          in: 'path',
          required: true,
          schema: { type: 'integer' },
        },
      ],
      responses: {
        200: {
          description: 'Registro encontrado',
        },
        404: {
          description: 'No encontrado',
        },
      },
    },
    put: {
      tags: ['FinanzasPersonales'],
      summary: 'Actualizar registro financiero',
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
              $ref: '#/components/schemas/FinanzasPersonalesUpdate',
            },
          },
        },
      },
      responses: {
        200: {
          description: 'Registro actualizado',
        },
      },
    },
    delete: {
      tags: ['FinanzasPersonales'],
      summary: 'Eliminar registro financiero',
      parameters: [
        {
          name: 'id',
          in: 'path',
          required: true,
          schema: { type: 'integer' },
        },
      ],
      responses: {
        204: {
          description: 'Eliminado exitosamente',
        },
      },
    },
  },
  '/api/finanzas/usuario/{usuario_id}': {
    get: {
      tags: ['FinanzasPersonales'],
      summary: 'Listar registros por usuario',
      parameters: [
        {
          name: 'usuario_id',
          in: 'path',
          required: true,
          schema: { type: 'string' },
        },
      ],
      responses: {
        200: {
          description: 'Registros encontrados',
        },
        404: {
          description: 'No encontrados',
        },
      },
    },
  },
};

export default finanzasPaths;
