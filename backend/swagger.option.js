import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const swaggerOption = {
    info: {
        version: '1.0.0',
        title: 'Todo/Kanban',
        description: 'API Documentation for Todo/Kanban',
        license: {
            name: 'ISC',
        },
    },

    baseDir: __dirname,
    filesPattern: [
        './controllers/*.controller.js',
        './dto/*.dto.js',
        './validators/*.validator.js'
    ],
    exposeSwaggerUI: true,
    swaggerUIPath: '/api-docs',
    swaggerUiOptions: {},
    exposeApiDocs: true,
    apiDocsPath: '/v3/api-docs/swagger.json',
};

export default swaggerOption;