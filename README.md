# Proyecto Express - Back-End

Servidor Back-End construido con Node.js y Express.

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
| ANY | /* | Rutas no encontradas (404) |
| GET | /products | Listar todos los productos |
| GET | /products/:id | Obtener producto por id (404 si no existe) |
| POST | /products | Crear nuevo producto (requiere nombre, precio, categoria) |
| PUT | /products/:id | Actualizar producto por id |
| DELETE | /products/:id | Eliminar producto por id |
## Probar endpoints

Con el navegador o Postman:
- `http://localhost:3000`
- `http://localhost:3000/health`
- `http://localhost:3000/ruta-falsa` (genera 404)

## Estructura del body (POST/PUT)
```json
{
  "nombre": "Laptop",
  "precio": 15000,
  "categoria": "Electronica"
}
```

## Nota
Proyecto desarrollado con apoyo de IA.