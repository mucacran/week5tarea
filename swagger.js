const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'My API - Week 5',
    description: 'Poder trabajar'
  },
  host: 'week5tarea.onrender.com',
  schemes: ['https']
};

const outputFile = 'swagger.json';
const endpointsFiles = ['./src/routes/index.js'];

// generate swagger.json
swaggerAutogen(outputFile, endpointsFiles, doc);
