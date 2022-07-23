import mongoose from "mongoose";

//1. Definir el schema de cada producto.
const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    stock: {
        type: Number,
        required: true
    },
    imageURL: {
        type: String,
        required: true
    }
    },{
        timestamps: true //Sirve para que MongoDB cree automáticamente un campo en el que se informe cuando se creó el registro y cuando se modificó por última vez.
    }
);

//2. Crear el modelo.
export const ProductsModel = mongoose.model("products", ProductSchema);