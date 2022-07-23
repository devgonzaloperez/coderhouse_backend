import '../configs/config.js';
import { ProductsDAOFactory } from '../services/DAOs/ProductsDAOFactory.js';

const productsDAO = ProductsDAOFactory.getDao();

export const getAllProducts = async (req, res) =>{
    const products = await productsDAO.getAll();
    if(products){
        res.status(200).json(products);
    }
};

export const getProductByID = async (req, res) =>{
    const {id} = req.params;
    const product = await productsDAO.getById({id});
    if(product){
        res.status(200).json(product); //Se podría aplicar el DTO en el DAO o en esta misma respuesta. El problema es que si lo hago en esta respuesta, no puede usar GraphQL. Si un proyecto no tiene GraphQL, lo podría aplicar acá, lo que es más eficiente para no repetir código.
    }
}

export const createProduct = async (req, res) =>{
    //1. Crear nuevo producto.
    const {name, description, price, stock, imageURL} = await req.body; //!!!
    const newProduct = await {
        name: name,
        description: description, 
        price: price,
        stock: stock, 
        imageURL: imageURL
    };
    const newProductAddedMSG = await productsDAO.save({newProduct});
    res.json(newProductAddedMSG);
}

export const updateProductByID = async (req, res) =>{
    const {id} = req.params;
    const newData = req.body;
    const updatedProduct = productsDAO.updateById({id, newData});
    updatedProduct.then((data) => res.send(data));
}

export const deleteProductByID = (req, res) =>{
    const {id} = req.params;
    const deletedProduct = productsDAO.deleteById({id});
    deletedProduct.then(data => res.send(data));
}