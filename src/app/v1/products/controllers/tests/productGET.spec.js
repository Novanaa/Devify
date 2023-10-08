import supertest from "supertest";
import app from "../../../../../app.js";

describe("Products - GET", () => {
  // GET /v1/products
  describe("GET /v1/products", () => {
    test("/v1/products - should be return 200 status code", async () => {
      const response = await supertest(app).get("/v1/products");
      expect(response.status).toBe(200);
    });
    test("/v1/products - should be defined", async () => {
      const response = await supertest(app).get("/v1/products");
      expect(response.body.products).toBeDefined();
    });
    test("/v1/products - v1/products items should be return 10 items", async () => {
      const response = await supertest(app).get("/v1/products?limit=10");
      expect(response.body.products.length).toBe(10);
    });
  });

  // GET /v1/products/:id
  describe("GET /v1/products/:id", () => {
    test("/v1/products/1 - should be return 200 status code", async () => {
      const response = await supertest(app).get("/v1/products/1");
      expect(response.status).toBe(200);
    });
    test("/v1/products/1 - should be defined", async () => {
      const response = await supertest(app).get("/v1/products/1");
      expect(response.body.product).toBeDefined();
    });
    test("/v1/products/100 - should be return 404 status code", async () => {
      const response = await supertest(app).get("/v1/products/100");
      expect(response.status).toBe(404);
    });
    test("/v1/products/100 - should be undefined", async () => {
      const response = await supertest(app).get("/v1/products/100");
      expect(response.body.product).not.toBeDefined();
    });
    test("/v1/products/<string> - should be return 400 status code", async () => {
      const response = await supertest(app).get("/v1/products/test");
      expect(response.status).toBe(422);
    });
  });

  // GET /v1/products/key/:id
  describe("GET /v1/products/key/:id", () => {
    test("/v1/products/key/6521c383dd6a09edfd2c6638 - should be return 200 status code", async () => {
      const response = await supertest(app).get(
        "/v1/products/key/6521c383dd6a09edfd2c6638"
      );
      expect(response.status).toBe(200);
    });
    test("/v1/products/key/6521c383dd6a09edfd2c6638 - should be defined", async () => {
      const response = await supertest(app).get(
        "/v1/products/key/6521c383dd6a09edfd2c6638"
      );
      expect(response.body.product).toBeDefined();
    });
    test("/v1/products/key/64a7ea5ff34df65abcbea671 - should be return 404 status code", async () => {
      const response = await supertest(app).get(
        "/v1/products/key/64a7ea5ff34df65abcbea671"
      );
      expect(response.status).toBe(404);
    });
    test("/v1/products/key/64a7ea5ff34df65abcbea671 - should be undefined", async () => {
      const response = await supertest(app).get(
        "/v1/products/key/64a7ea5ff34df65abcbea671"
      );
      expect(response.body.product).not.toBeDefined();
    });
    test("/v1/products/key/ - should be return 422 status code", async () => {
      const response = await supertest(app).get("/v1/products/key/");
      expect(response.status).toBe(422);
    });
  });

  // GET /v1/products/search?q=<queries>
  describe("GET /v1/products/search?q=<query>", () => {
    test("/v1/products/search?q=<query> - should be return 200 status code", async () => {
      const response = await supertest(app).get("/v1/products/search?q=");
      expect(response.status).toBe(200);
    });
    test("/v1/products/search?q=<query> - should be defined", async () => {
      const response = await supertest(app).get("/v1/products/search?q=");
      expect(response.body.products).toBeDefined();
    });
    test("/v1/products/search?q=<query> - should be return 200 status code", async () => {
      const response = await supertest(app).get(
        "/v1/products/search?q=samsung"
      );
      expect(response.status).toBe(200);
    });
    test(`/v1/products/search?q=<query> - should be defined a v1/products that includes "samsung"`, async () => {
      const response = await supertest(app).get(
        "/v1/products/search?q=samsung"
      );
      expect(response.body.products).toBeDefined();
    });
    test("/v1/products/search - should be return 400 status code", async () => {
      const response = await supertest(app).get("/v1/products/search");
      expect(response.status).toBe(400);
    });
  });

  // GET /v1/products/categories
  describe("GET /v1/products/categories || GET /v1/products/categories/:category", () => {
    test("/v1/products/categories - should be return 200 status code", async () => {
      const response = await supertest(app).get("/v1/products/categories");
      expect(response.status).toBe(200);
    });
    test("/v1/products/categories/jewelry - should be return 200 status code", async () => {
      const response = await supertest(app).get(
        "/v1/products/categories/jewelry"
      );
      expect(response.status).toBe(200);
    });
    test("/v1/products/categories/furniture - should be return 200 status code", async () => {
      const response = await supertest(app).get(
        "/v1/products/categories/furniture"
      );
      expect(response.status).toBe(200);
    });
    test("/v1/products/categories/mens - should be return 200 status code", async () => {
      const response = await supertest(app).get("/v1/products/categories/mens");
      expect(response.status).toBe(200);
    });
    test("/v1/products/categories/womens - should be return 200 status code", async () => {
      const response = await supertest(app).get(
        "/v1/products/categories/womens"
      );
      expect(response.status).toBe(200);
    });
    test("/v1/products/categories/electronics - should be return 200 status code", async () => {
      const response = await supertest(app).get(
        "/v1/products/categories/electronics"
      );
      expect(response.status).toBe(200);
    });
    test("/v1/products/categories/electronics - should be defined", async () => {
      const response = await supertest(app).get(
        "/v1/products/categories/electronics"
      );
      expect(response.body.products).toBeDefined();
    });
    test("/v1/products/categories/test - should be undefined", async () => {
      const response = await supertest(app).get("/v1/products/categories/test");
      expect(response.body.products).not.toBeDefined();
    });
    test("/v1/products/categories/test - should be return 404 status code", async () => {
      const response = await supertest(app).get("/v1/products/categories/test");
      expect(response.status).toBe(404);
    });
    test("/v1/products/categories/jewelry?limit=5 - should be return 5 v1/products items", async () => {
      const response = await supertest(app).get(
        "/v1/products/categories/jewelry?limit=5"
      );
      expect(response.body.products.length).toBe(5);
    });
  });
});
