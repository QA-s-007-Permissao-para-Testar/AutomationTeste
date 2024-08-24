const {getUserDetails} = require("../requests/getUserDetails");

describe("Cenário 10 - Obter Detalhes da Conta do Usuário por E-mail", () => {
    
    let response;
    let data;
    let email = "emailteste@teste.com";

    beforeAll(async () => {
        response = await getUserDetails(email);
        data = await response.json();
    });
      

    test("Get User Details deve retornar status code de 200 para email valido", () => {
        expect(response.status).toBe(200);
    });


    test("Get User Details deve retornar responseCode de 200 para email valido", () => {
        expect(data.responseCode).toBe(200);
    });


    test("Get User Details deve retornar responseCode de 400 para email invalido", async () => {     
        const emailInvalido = "a"
        const _response = await getUserDetails(emailInvalido);
        expect(_response.status).toBe(400);
    });

    test("Get User Details não deve retornar nenhum dado para email invalido", async () => {
        
        const emailInvalido = "a"

        const _response = await getUserDetails(emailInvalido);
        const _data = await _response.json();

        expect(_data.user.id).not.toBeGreaterThanOrEqual(0);
    });


});