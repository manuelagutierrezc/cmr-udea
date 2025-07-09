const empleoSchema = {
  Empleo: {
    type: 'object',
    properties: {
      ID: { type: 'integer', readOnly: true },
      usuario_id: { type: 'string' },
      IDENTIFICACION_COMPANIA: { type: 'string', nullable: true },
      NOMBRE_COMPANIA: { type: 'string', nullable: true },
      EMPLEO_PRINCIPAL: { type: 'string', nullable: true },
      CARGO_OFICIO: { type: 'string', nullable: true },
      CODIGO_CIIU: { type: 'string', nullable: true },
      DESCRIPCION_CIIU: { type: 'string', nullable: true },
      RELACION_LABORAL: { type: 'string', nullable: true },
      VINCULO_LABORAL: { type: 'string', nullable: true },
      ESTADO_LABORAL: { type: 'string', nullable: true },
      TIPO_CONTRATO: { type: 'string', nullable: true },
      TIPO_SALARIO: { type: 'string', nullable: true },
      SALARIO: { type: 'number', format: 'float', nullable: true },
      FRECUENCIA_PAGO: { type: 'string', nullable: true },
      FORMA_PAGO: { type: 'string', nullable: true },
    },
    required: ['usuario_id'],
  },
};

export default empleoSchema;
