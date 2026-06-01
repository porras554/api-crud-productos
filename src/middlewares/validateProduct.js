// Validación para POST - crear producto
const validateCreate = (req, res, next) => {
  const { nombre, precio, categoria } = req.body;

  if (!nombre || typeof nombre !== 'string') {
    return res.status(400).json({ ok: false, error: 'El campo nombre es requerido y debe ser texto' });
  }
  if (precio === undefined || typeof precio !== 'number') {
    return res.status(400).json({ ok: false, error: 'El campo precio es requerido y debe ser número' });
  }
  if (!categoria || typeof categoria !== 'string') {
    return res.status(400).json({ ok: false, error: 'El campo categoria es requerido y debe ser texto' });
  }

  next();
};

// Validación para PUT - actualizar producto
const validateUpdate = (req, res, next) => {
  const { precio } = req.body;

  if (precio !== undefined && typeof precio !== 'number') {
    return res.status(400).json({ ok: false, error: 'El campo precio debe ser número' });
  }

  next();
};

module.exports = { validateCreate, validateUpdate };