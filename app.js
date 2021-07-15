const express = require('express')
const swaggerJSDoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')

const app = express()

const PORT = process.env.PORT || 3000

// Swagger definition
const swaggerDefinition = {
    info: {
        title: 'Swagger Sample API', // Title of the documentation
        version: '1.0.0', // Version of the app
        description: 'This version Swagger standalone use Yaml define', // short description of the app
    },
    schema: 'http',
    host: `localhost:${PORT}`, // the host or url of the app
    basePath: '/', // the basepath of your endpoint
}

// options for the swagger docs
const options = {
    swaggerDefinition,
    apis: ['./docs/**/*.yaml'],
};
// initialize swagger-jsdoc
const swaggerSpec = swaggerJSDoc(options)

// use swagger-Ui-express for your app documentation endpoint
app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

const server = app.listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`Listening on port ${PORT}`);
})