const reingresoUsuarioSchema = {
  ReingresoUsuario: {
    type: 'object',
    properties: {
      ID: { type: 'integer' },
      usuario_id: { type: 'integer' },
      FECHA_REINGRESO: { type: 'string', format: 'date-time', nullable: true },
      ACTA_REINGRESO: { type: 'string', nullable: true },
    },
  },
  ReingresoUsuarioInput: {
    type: 'object',
    required: ['usuario_id'],
    properties: {
      usuario_id: { type: 'integer' },
      FECHA_REINGRESO: { type: 'string', format: 'date-time' },
      ACTA_REINGRESO: { type: 'string' },
    },
  },
};

export default reingresoUsuarioSchema;
