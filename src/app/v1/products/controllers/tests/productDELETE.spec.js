import supertest from "supertest";
import app from "../../../../../app.js";

describe("Products - DELETE", () => {
  describe("DELETE /v1/products/:id", () => {
    test("/v1/products/<string> - should be return 422 status code if the request params is string", async () => {
      const response = await supertest(app).delete("/v1/products/test");
      expect(response.status).toBe(422);
    });
    test("/v1/products/100 - should be return 404 status code if product data is not found", async () => {
      const response = await supertest(app).delete("/v1/products/100");
      expect(response.status).toBe(404);
    });
    test("/v1/products/1 - should be return 200 status code if successfully delete the product data", async () => {
      const response = await supertest(app).delete("/v1/products/110");
      expect(response.status).toBe(200);
    });
  });
  describe("DELETE /v1/products/key/:id", () => {
    test("/v1/products/<string> - should be return 422 status code if the request params is not a mongodbid", async () => {
      const response = await supertest(app).delete(
        "/v1/products/6522256b2cfbd571dc809d34"
      );
      expect(response.status).toBe(422);
    });
    test("/v1/products/<string> - should be return 422 status code if the request params is not a mongodbid", async () => {
      const response = await supertest(app).delete("/v1/products/tests");
      expect(response.status).toBe(422);
    });
    test("/v1/products/3 - should be return 200 status code if successfully delete the product data", async () => {
      const response = await supertest(app).delete(
        "/v1/products/key/6522282193c2bc0b623ef404"
      );
      expect(response.status).toBe(200);
    });
  });
});
