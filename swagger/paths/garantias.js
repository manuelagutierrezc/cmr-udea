const garantiasPaths = {
    '/api/garantias': {
        get: {
            tags: ['Garantías'],
            summary: 'Listar todas las garantías',
            responses: {
                200: {
                    description: 'Lista de garantías',
                },
            },
        },
        post: {
            tags: ['Garantías'],
            summary: 'Crear una garantía',
            requestBody: {
                required: true,
                content: {
                    'application/json': {
                        schema: { $ref: '#/components/schemas/Garantia' },
                    },
                },
            },
            responses: {
                201: {
                    description: 'Garantía creada',
                },
            },
        },
    },
    '/api/garantias/{id}': {
        get: {
            tags: ['Garantías'],
            summary: 'Obtener garantía por ID',
            parameters: [
                {
                    name: 'id',
                    in: 'path',
                    required: true,
                    schema: { type: 'integer' },
                },
            ],
            responses: {
                200: { description: 'Garantía encontrada' },
                404: { description: 'No encontrada' },
            },
        },
        put: {
            tags: ['Garantías'],
            summary: 'Actualizar garantía por ID',
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
                        schema: { $ref: '#/components/schemas/Garantia' },
                    },
                },
            },
            responses: {
                200: { description: 'Garantía actualizada' },
                400: { description: 'Error al actualizar' },
            },
        },
        delete: {
            tags: ['Garantías'],
            summary: 'Eliminar garantía por ID',
            parameters: [
                {
                    name: 'id',
                    in: 'path',
                    required: true,
                    schema: { type: 'integer' },
                },
            ],
            responses: {
                204: { description: 'Garantía eliminada' },
                404: { description: 'No encontrada' },
            },
        },
    },
    '/api/garantias/usuario/{credito_usuario_id}': {
        get: {
            tags: ['Garantías'],
            summary: 'Obtener garantías por ID de crédito de usuario',
            parameters: [
                {
                    name: 'credito_usuario_id',
                    in: 'path',
                    required: true,
                    schema: { type: 'integer' },
                },
            ],
            responses: {
                200: {
                    description: 'Garantías encontradas',
                },
                404: {
                    description: 'No encontradas',
                },
            },
        },
    },
};

export default garantiasPaths;
