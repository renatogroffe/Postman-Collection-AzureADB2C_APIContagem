pm.test("Retorno OK Login", function() {
    pm.response.to.be.ok;
    pm.response.to.json;
    pm.response.to.be.withBody;
});

var result = pm.response.json();

pm.test("Verificar se token foi gerado", function() {
    pm.expect(result.access_token).not.undefined;
    pm.expect(result.access_token).not.null;
    pm.collectionVariables.set("tokenADB2C", result.access_token)
});