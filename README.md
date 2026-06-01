# Proyecto Express - API RESTful CRUD

Servidor Back-End construido con Node.js y Express con CRUD completo de productos.

## Requisitos

- Node.js v18 o superior
- npm

## Instalación

```bash
npm install
```

## Variables de entorno

Copia el archivo `.env.example` y renómbralo `.env`:

```bash
PORT=3000
```

## Ejecución

Modo producción:
```bash
npm start
```

Modo desarrollo (nodemon):
```bash
npm run dev
```

## Endpoints

| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | / | Verifica que el servidor corre |
| GET | /health | Estado del servidor (uptime, timestamp) |
| GET | /products | Listar todos los productos |
| GET | /products/:id | Obtener producto por id |
| POST | /products | Crear nuevo producto |
| PUT | /products/:id | Actualizar producto por id |
| DELETE | /products/:id | Eliminar producto por id |

## Probar endpoints con curl

```bash
# Listar productos
curl http://localhost:3000/products

# Obtener producto por id
curl http://localhost:3000/products/1

# Crear producto
curl -X POST http://localhost:3000/products \
  -H "Content-Type: application/json" \
  -d '{"nombre":"Laptop","precio":15000,"categoria":"Electronica"}'

# Actualizar producto
curl -X PUT http://localhost:3000/products/1 \
  -H "Content-Type: application/json" \
  -d '{"nombre":"Laptop Pro","precio":18000,"categoria":"Electronica"}'

# Eliminar producto
curl -X DELETE http://localhost:3000/products/1
```

## Uso de IA
Se utilizó IA como apoyo para el proyecto y subida a GitHub.