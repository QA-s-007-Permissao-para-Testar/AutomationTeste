const {getProductList} = require("../requests/getProducts");

describe("Cenário 06 - Obter Lista de Todos os Produtos", () => {

    let response;
    let data;

    beforeAll(async () => {
        response = await getProductList()
        data = await response.json();
    });
      
    test("Get Products deve retornar status code de 200", () => {
        expect(response.status).toBe(200);
    });

    test("Get Products deve retornar responseCode de 200", () => {
        expect(data.responseCode).toBe(200);
    });

    test("Get Products deve conter uma lista de produtos", () => {    
        expect(Array.isArray(data.products)).toBe(true);
    });

    test("Get Products deve conter uma lista de produtos não vazia", () => {    
        expect(data.products.length).toBeGreaterThan(0);
    });

})
