
class ProductManager {

    #id = 0;
    #products = [];
    

    addProduct (product){

        if()


        product.id = this.#id++;
        this.#products.push(product);


    }

    getProductById(id){
        return this.#products.find(product => product.id === id);
    }
    
    getProducts(){

        return this.#products;
    }

} 

const productoPrueba = {
    title = "Producto de prueba",
    description = "No sirve para un carajo",
    price = 2000,
    thumbnail = "Sin Imagen",
    code = "abc123",
    stock = 25
};

console.log(getProducts());

addProduct(productoPrueba);

console.log(getProducts());

console.log(getProductById(1))
