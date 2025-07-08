const direccionesPaths = {
    '/api/direcciones': {
        get: {
            tags: ['Direcciones'],
            summary: 'Listar todas las direcciones',
            responses: {
                200: {
                    description: 'Lista de direcciones',
                },
            },
        },
        post: {
            tags: ['Direcciones'],
            summary: 'Crear una nueva dirección',
            requestBody: {
                required: true,
                content: {
                    'application/json': {
                        schema: { $ref: '#/components/schemas/DireccionUsuarioInput' },
                    },
                },
            },
            responses: {
                201: {
                    description: 'Dirección creada',
                },
                400: {
                    description: 'Error al crear la dirección',
                },
            },
        },
    },
    '/api/direcciones/{id}': {
        get: {
            tags: ['Direcciones'],
            summary: 'Obtener una dirección por ID',
            parameters: [
                {
                    name: 'id',
                    in: 'path',
                    required: true,
                    schema: { type: 'integer' },
                },
            ],
            responses: {
                200: { description: 'Dirección encontrada' },
                404: { description: 'No encontrada' },
            },
        },
        put: {
            tags: ['Direcciones'],
            summary: 'Actualizar una dirección por ID',
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
                        schema: { $ref: '#/components/schemas/DireccionUsuarioInput' },
                    },
                },
            },
            responses: {
                200: { description: 'Dirección actualizada' },
                400: { description: 'Error al actualizar' },
            },
        },
        delete: {
            tags: ['Direcciones'],
            summary: 'Eliminar una dirección por ID',
            parameters: [
                {
                    name: 'id',
                    in: 'path',
                    required: true,
                    schema: { type: 'integer' },
                },
            ],
            responses: {
                204: { description: 'Dirección eliminada' },
                400: { description: 'Error al eliminar' },
            },
        },
    },
    '/api/direcciones/usuario/{usuario_id}': {
        get: {
            tags: ['Direcciones'],
            summary: 'Obtener direcciones por ID de usuario',
            parameters: [
                {
                    name: 'usuario_id',
                    in: 'path',
                    required: true,
                    schema: { type: 'string' },
                    description: 'Identificación del usuario',
                },
            ],
            responses: {
                200: {
                    description: 'Lista de direcciones del usuario',
                    content: {
                        'application/json': {
                            schema: {
                                type: 'array',
                                items: { $ref: '#/components/schemas/DireccionUsuario' },
                            },
                        },
                    },
                },
                404: {
                    description: 'Usuario no encontrado o sin direcciones',
                },
            },
        },
    },
};

export default direccionesPaths;
