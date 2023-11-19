import express from "express";
import ProductManager from "./ProductManager";
import handlebars from "handlebars";
import {__dirname} from "./utils"


const app = express();
const filePath = "ProductManager.js";
const productManager = new ProductManager(filePath);

// Middleware para manejo de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

// Ruta para /productos/:pid
app.get("/productos/:pid", async (req, res) => {
  try {
    const productId = parseInt(req.params.pid, 10);
    const productoEncontrado = productManager.getProductById(productId);

    if (productoEncontrado) {
      res.json(productoEncontrado);
    } else {
      res.status(404).json({ error: "Producto no encontrado" });
    }
  } catch (error) {
    console.error("Error al obtener el producto:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
});

// Ruta para /productos
app.get("/productos", async (req, res) => {
  try {
    const limit =
      req.query.limit !== undefined ? parseInt(req.query.limit, 10) : undefined;

    const productos = productManager.getProducts(limit);
    res.json(productos);
  } catch (error) {
    console.error("Error al obtener los productos:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
});

app.listen(8080, () => {
  console.log("Servidor arriba en el puerto 8080");
});
