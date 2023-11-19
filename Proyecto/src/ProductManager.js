const fs = require("fs");

class ProductManager {
  constructor(filePath) {
    this.path = filePath;
    this.products = [];
    this.productIdCounter = 1;
    this.loadProductsFromDisk();
  }

  addProduct(product) {
    product.id = this.productIdCounter++;
    this.products.push(product);
    this.saveProductsToDisk();
    console.log("Producto agregado correctamente:", product);
  }

  getProducts() {
    return this.products;
  }

  getProductById(id) {
    const product = this.products.find((product) => product.id === id);
    if (product) {
      return product;
    } else {
      console.error("Producto no encontrado.");
      return null;
    }
  }

  updateProduct(id, updatedProduct) {
    const index = this.products.findIndex((product) => product.id === id);
    if (index !== -1) {
      this.products[index] = {
        id: id,
        ...updatedProduct,
      };
      this.saveProductsToDisk();
      console.log("Producto actualizado correctamente:", this.products[index]);
    } else {
      console.error("Producto no encontrado.");
    }
  }

  deleteProduct(id) {
    const index = this.products.findIndex((product) => product.id === id);
    if (index !== -1) {
      const deletedProduct = this.products.splice(index, 1)[0];
      this.saveProductsToDisk();
      console.log("Producto eliminado correctamente:", deletedProduct);
    } else {
      console.error("Producto no encontrado.");
    }
  }

  saveProductsToDisk() {
    fs.writeFileSync(this.path, JSON.stringify(this.products, null, 2), "utf8");
  }

  loadProductsFromDisk() {
    try {
      const data = fs.readFileSync(this.path, "utf8");
      this.products = JSON.parse(data);
      this.productIdCounter =
        this.products.reduce(
          (maxId, product) => Math.max(maxId, product.id),
          0
        ) + 1;
    } catch (error) {
      console.log("No se pudo cargar el archivo. Se creará uno nuevo.");
      this.saveProductsToDisk();
    }
  }
}

// Ejemplo de uso:
const filePath = "products.json"; // Nombre del archivo donde se guardarán los productos
const manager = new ProductManager(filePath);

const product1 = {
  title: "Producto 1",
  description: "Descripción del Producto 1",
  price: 19.99,
  thumbnail: "imagen1.jpg",
  code: "P001",
  stock: 50,
};

const product2 = {
  title: "Producto 2",
  description: "Descripción del Producto 2",
  price: 29.99,
  thumbnail: "imagen2.jpg",
  code: "P002",
  stock: 30,
};

manager.addProduct(product1);
manager.addProduct(product2);

const allProducts = manager.getProducts();
console.log("Todos los productos:", allProducts);

const productById = manager.getProductById(1); // Cambiar el ID según el producto que se quiera buscar
console.log("Producto por ID:", productById);

const updatedProduct = {
  title: "Producto Modificado",
  description: "Descripción modificada",
  price: 39.99,
  thumbnail: "imagen_modificada.jpg",
  code: "P003",
  stock: 20,
};
manager.updateProduct(1, updatedProduct);

manager.deleteProduct(2);
