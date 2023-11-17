// @ts-nocheck
class ProductManager {
    constructor() {
        this.products = [];
        this.productIdCounter = 1;
    }

    addProduct(title, description, price, thumbnail, code, stock) {
        if (!title || !description || !price || !thumbnail || !code || !stock) {
            console.error("Todos los campos son obligatorios.");
            return;
        }

        if (this.products.some(product => product.code === code)) {
            console.error("Ya existe un producto con el mismo código.");
            return;
        }

        const newProduct = {
            id: this.productIdCounter,
            title: title,
            description: description,
            price: price,
            thumbnail: thumbnail,
            code: code,
            stock: stock
        };

        this.products.push(newProduct);
        this.productIdCounter++;

        console.log("Producto agregado correctamente:", newProduct);
    }

    getProducts() {
        return this.products;
    }

    getProductById(id) {
        const product = this.products.find(product => product.id === id);
        if (product) {
            return product;
        } else {
            console.error("Not found.");
        }
    }
}

// Ejemplo de uso:
const manager = new ProductManager();
manager.addProduct("Producto 1", "Descripción del Producto 1", 19.99, "imagen1.jpg", "P001", 50);
manager.addProduct("Producto 2", "Descripción del Producto 2", 29.99, "imagen2.jpg", "P002", 30);

const allProducts = manager.getProducts();
console.log("Todos los productos:", allProducts);

const productById = manager.getProductById(1); // Cambiar el ID según el producto que se quiera buscar
console.log("Producto por ID:", productById);
