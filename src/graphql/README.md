//QUERIES.

    //a) Get all products.
    query{
        getAllProducts{
            id
            name
            price
        }
    }

    //b) Get product by ID.
    query{
        getProductByID(id: "62b628a39fba4368db36f12e"){
            name
            price
        }
    }

//MUTATIONS.

    a) Create product.
    mutation{
        createProduct(product: {
            name: "Prueba GraphQL"
            description: "Prueba GraphQL"
            price: 100
            stock: 100
            imageURL: "http://google.com"
        })
    }

    b) Update product.
    mutation{
        updateProductByID(
            id: "62d704c67b99a9f3ccd9edaf", 
            newData: {stock: 12000}
        )
    }

    c) Delete product.
    mutation{
        deleteProductByID(id: "62d704d70d4d7f88aa8f7a49")
    }