const express = require('express');
const morgan = require('./middlewares/logger');
const routes = require('./routes/index');
const productRoutes = require('./routes/products');
const { notFound, errorHandler } = require('./middlewares/errorHandler');

const app = express();

// Middlewares
app.use(express.json());
app.use(morgan);

// Rutas
app.use('/', routes);
app.use('/products', productRoutes);

// Manejo de errores
app.use(notFound);
app.use(errorHandler);

module.exports = app;