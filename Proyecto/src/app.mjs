import express from 'express';
import fs from 'fs/promises';

const app = express();


// Ruta para /products/:pid
app.get('/products/:pid', async (req, res) => {
    try {
        // Leemos el archivo con los productos
        const data = await fs.readFile('productos.json', 'utf8');
        const productos = JSON.parse(data);

        const productId = parseInt(req.params.pid, 10);
        const productoEncontrado = productos.find(producto => producto.id === productId);

        if (productoEncontrado) {
            res.json(productoEncontrado);
        } else {
            res.status(404).json({ error: 'Producto no encontrado' });
        }
    } catch (error) {
        console.error('Error al leer el archivo:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
});

app.listen(8080, () => {
    console.log('Servidor arriba en el puerto 8080');
});
