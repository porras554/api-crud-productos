const Product = require('../models/Product');

const getAll = async (req, res, next) => {
  try {
    const products = await Product.findAll();
    res.json({ ok: true, data: products });
  } catch (error) {
    next(error);
  }
};

const getById = async (req, res, next) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (!product) return res.status(404).json({ ok: false, error: 'Producto no encontrado' });
    res.json({ ok: true, data: product });
  } catch (error) {
    next(error);
  }
};

const create = async (req, res, next) => {
  try {
    const { nombre, descripcion, precio, categoria, stock, disponible } = req.body;
    const product = await Product.create({ nombre, descripcion, precio, categoria, stock, disponible });
    res.status(201).json({ ok: true, data: product });
  } catch (error) {
    next(error);
  }
};

const update = async (req, res, next) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (!product) return res.status(404).json({ ok: false, error: 'Producto no encontrado' });
    await product.update(req.body);
    res.json({ ok: true, data: product });
  } catch (error) {
    next(error);
  }
};

const remove = async (req, res, next) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (!product) return res.status(404).json({ ok: false, error: 'Producto no encontrado' });
    await product.destroy();
    res.json({ ok: true, message: 'Producto eliminado' });
  } catch (error) {
    next(error);
  }
};

module.exports = { getAll, getById, create, update, remove };