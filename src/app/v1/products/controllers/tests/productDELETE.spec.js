import supertest from "supertest";
import app from "../../../../../app.js";

describe("Products - DELETE", () => {
  describe("DELETE /products/:id", () => {
    test("/products/<string> - should be return 422 status code if the request params is string", async () => {
      const response = await supertest(app).delete("/products/test");
      expect(response.status).toBe(422);
    });
    test("/products/100 - should be return 404 status code if product data is not found", async () => {
      const response = await supertest(app).delete("/products/100");
      expect(response.status).toBe(404);
    });
    test("/products/1 - should be return 200 status code if successfully delete the product data", async () => {
      const response = await supertest(app).delete("/products/2");
      expect(response.status).toBe(200);
    });
  });
  describe("DELETE /products/key/:id", () => {
    test("/products/<string> - should be return 422 status code if the request params is not a mongodbid", async () => {
      const response = await supertest(app).delete(
        "/products/65069e211bfc5db7f900a4a2"
      );
      expect(response.status).toBe(422);
    });
    test("/products/<string> - should be return 422 status code if the request params is not a mongodbid", async () => {
      const response = await supertest(app).delete("/products/tests");
      expect(response.status).toBe(422);
    });
    test("/products/3 - should be return 200 status code if successfully delete the product data", async () => {
      const response = await supertest(app).delete(
        "/products/key/65090bf0362c2c7a6867c69c"
      );
      expect(response.status).toBe(200);
    });
  });
});
