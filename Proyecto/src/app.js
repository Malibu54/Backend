import express from 'express';
import ProductManager from './ProductManager'; 

const app = express();
const filePath = 'productos.json'; 
const productManager = new ProductManager(filePath);

// Middleware para manejo de errores
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

// Ruta para /productos/:pid
app.get('/productos/:pid', async (req, res) => {
    try {
        const productId = parseInt(req.params.pid, 10);
        const productoEncontrado = productManager.getProductById(productId);

        if (productoEncontrado) {
            res.json(productoEncontrado);
        } else {
            res.status(404).json({ error: 'Producto no encontrado' });
        }
    } catch (error) {
        console.error('Error al obtener el producto:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
});

// Ruta para /productos 
app.get('/productos', async (req, res) => {
    try {
        let limit = parseInt(req.query.limit);

        if (isNaN(limit)) {
            limit = undefined; // Si no se proporciona el límite, devolver todos los productos
        }

        const productos = productManager.getproductos(limit);
        res.json(productos);
    } catch (error) {
        console.error('Error al obtener los productos:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
});

app.listen(8080, () => {
    console.log('Servidor arriba en el puerto 8080');
});
