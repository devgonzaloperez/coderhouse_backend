import { buildSchema } from 'graphql';

export const productSchema = buildSchema(`
    type Product {
        id: ID!
        name: String
        description: String
        price: Int
        stock: Int
        imageURL: String
    }
    input ProductsInput {
        name: String!
        description: String!
        price: Int!
        stock: Int!
        imageURL: String!
    }
    input ProductsEditInput {
        name: String
        description: String
        price: Int
        stock: Int
        imageURL: String
    }
    type Query {
        getAllProducts: [Product]
        getProductByID(id: ID!): Product
    }
    type Mutation {
        createProduct(product: ProductsInput): String
        updateProductByID(id: String!, newData: ProductsEditInput): String
        deleteProductByID(id: String!): String
    }
`);