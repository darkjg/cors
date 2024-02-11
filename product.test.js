const { resetProducts,  addProduct, removeProduct, getProducts, getProduct, updateProduct,añadirdatos} = require('./product');

describe('addProduct', () => {
    it('Añade un producto', () => {
        expect(addProduct("jorge", 12)).toBe("Producto añadido");
        
    });
    it('no se ha añadido', () => {
        expect(() => addProduct( 12)).toThrow("nombre y precio no pueden estar vacios")
    });
    
});

describe('removeProduct', () => {
    it('Elimina un producto', () => {
        expect(removeProduct(1)).toBe("Eliminado correctamente");
    });
    it('no se ha eliminado', () => {
        expect(() => removeProduct(1900)).toThrow("Este producto no existe")
    });
});

    


describe('getProduct', () => {
    añadirdatos();
    it('Obtiene un producto por id', () => {
         expect(getProduct(1)).toStrictEqual(({ nombre:"aa", precio:12}));

    });
    it('no se pude obtener', () => {
        expect(() => getProduct(100)).toThrow("Este producto no existe")
    });
});


describe('updateProduct', () => {
    it('Actualiza un producto por id', () => {
        expect(updateProduct(1,"cesar",20)).toStrictEqual(({ nombre:"cesar", precio:20}));

    });
    it('no se ha eliminado', () => {
        expect(() => updateProduct(100,2,3)).toThrow("Este producto no existe")
    });
});
