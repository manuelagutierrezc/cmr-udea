module.exports = {
  Garantia: {
    type: "object",
    properties: {
      ID: { type: "integer", example: 1 },
      credito_usuario_id: { type: "integer", example: 101 },
      Garantia: { type: "number", format: "float", example: 150000.5 },
      FechaAvaluo: { type: "string", format: "date-time", example: "2024-12-31T00:00:00Z" },
      Deterioro: { type: "number", format: "float", example: 0.1 },
      DeterioroInteres: { type: "number", format: "float", example: 0.05 },
      Contingencia: { type: "number", format: "float", example: 20000.0 }
    },
    required: ["credito_usuario_id"]
  }
};
