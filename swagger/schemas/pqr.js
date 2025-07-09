const pqrSchema = {
  PqrCreate: {
    type: 'object',
    required: ['usuario_id'],
    properties: {
      usuario_id: { type: 'string' },
      tipoIdentificacion: { type: 'string' },
      documentoIdentificacion: { type: 'string' },
      email: { type: 'string', format: 'email' },
      tipoSolicitante: { type: 'string' },
      pais: { type: 'string' },
      estado: { type: 'string' },
      provincia: { type: 'string' },
      medioContacto: { type: 'string' },
      telefono: { type: 'string' },
      movil: { type: 'string' },
      direccion: { type: 'string' },
      tipoSolicitud: { type: 'string' },
      servicio: { type: 'string' },
      titulo: { type: 'string' },
      descripcion: { type: 'string' },
      adjunto: { type: 'string', format: 'byte' }
    }
  },

  PqrUpdate: {
    type: 'object',
    properties: {
      tipoIdentificacion: { type: 'string' },
      documentoIdentificacion: { type: 'string' },
      email: { type: 'string', format: 'email' },
      tipoSolicitante: { type: 'string' },
      pais: { type: 'string' },
      estado: { type: 'string' },
      provincia: { type: 'string' },
      medioContacto: { type: 'string' },
      telefono: { type: 'string' },
      movil: { type: 'string' },
      direccion: { type: 'string' },
      tipoSolicitud: { type: 'string' },
      servicio: { type: 'string' },
      titulo: { type: 'string' },
      descripcion: { type: 'string' },
      adjunto: { type: 'string', format: 'byte' }
    }
  }
};

export default pqrSchema;
