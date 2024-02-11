let products = []; // declaramos una variable products vacía
let id = 0; // declaramos una variable id con valor 0



function comprobarExistencia(nombre) {
    let bandera = false
    products.forEach(producto => {
        if (producto.nombre == nombre) {
            bandera = true;
        }
    });
    return bandera;
}

function comprobarExistenciaID(id) {
    let bandera = false
    if (products[id - 1] == undefined) {
        bandera = true;
    }
    return bandera;
}

function resetProducts() {
    products = []; // declaramos una variable products vacía
    id = 0;
}

function addProduct(nombre, precio) {
    if (!nombre || !precio) {
        throw new Error('nombre y precio no pueden estar vacios');
    } else {
    } if (comprobarExistencia(nombre)) {
        throw new Error('Este producto ya existe');
    } else {
        let product = {
            nombre: nombre,
            precio: precio
        }

        products.push(product);
        id = products.length;
        return "Producto añadido"
    }
}

function removeProduct(id) {

    if (!id) {
        throw new Error('id puede estar vacio');
    } else {
    } if (comprobarExistenciaID(id)) {
        throw new Error('Este producto no existe');
    } else {


        delete products[id - 1]
        products = products.filter(producto => producto != undefined)
        id = products.length
        return "Eliminado correctamente"
    }
}

function getProducts() {

    if (products.length == 0) {
        throw new Error('No existen productos');
    } else {
        products.forEach(producto => {
            console.log(producto)
        });
    }
}
function getProduct(id) {

    if (products.length == 0) {
        throw new Error('No existen productos');
    } if (comprobarExistenciaID(id)) {
        throw new Error('Este producto no existe');
    }
    return products[id - 1]

}
function updateProduct(id, nombre, precio) {

    if (products.length == 0) {
        throw new Error('No existen productos');
    } if (comprobarExistenciaID(id)) {
        throw new Error('Este producto no existe');
    }
    if (nombre) { products[id - 1].nombre= nombre }
    if (precio) { products[id - 1].precio= precio }
    return getProduct(id)

}

function añadirdatos(){
    addProduct("hola", 12)
addProduct("aa", 12)
addProduct("hssola", 12)
addProduct("dd", 12)
}

module.exports = {
    resetProducts,  addProduct, removeProduct, getProducts, getProduct, updateProduct,añadirdatos
  };
  
/*

addProduct("hola", 12)
addProduct("aa", 12)
addProduct("hssola", 12)
addProduct("dd", 12)

removeProduct(1)
getProducts()
console.log("Separasion")
updateProduct(2,"sisar",20)
getProducts()
*/