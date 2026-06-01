// Middleware 404 - Ruta no encontrada
const notFound = (req, res, next) => {
  res.status(404).json({
    ok: false,
    error: 'Ruta no encontrada',
    path: req.originalUrl,
  });
};

// Middleware 500 - Error del servidor
const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    ok: false,
    error: 'Error interno del servidor',
    message: err.message,
  });
};

module.exports = { notFound, errorHandler };