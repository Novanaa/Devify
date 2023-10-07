import supertest from "supertest";
import app from "../../../../../app.js";

describe("Products - GET", () => {
  // GET /products
  describe("GET /products", () => {
    test("/products - should be return 200 status code", async () => {
      const response = await supertest(app).get("/products");
      expect(response.status).toBe(200);
    });
    test("/products - should be defined", async () => {
      const response = await supertest(app).get("/products");
      expect(response.body.products).toBeDefined();
    });
    test("/products - products items should be return 10 items", async () => {
      const response = await supertest(app).get("/products?limit=10");
      expect(response.body.products.length).toBe(10);
    });
  });

  // GET /products/:id
  describe("GET /products/:id", () => {
    test("/products/1 - should be return 200 status code", async () => {
      const response = await supertest(app).get("/products/1");
      expect(response.status).toBe(200);
    });
    test("/products/1 - should be defined", async () => {
      const response = await supertest(app).get("/products/1");
      expect(response.body.product).toBeDefined();
    });
    test("/products/100 - should be return 404 status code", async () => {
      const response = await supertest(app).get("/products/100");
      expect(response.status).toBe(404);
    });
    test("/products/100 - should be undefined", async () => {
      const response = await supertest(app).get("/products/100");
      expect(response.body.product).not.toBeDefined();
    });
    test("/products/<string> - should be return 400 status code", async () => {
      const response = await supertest(app).get("/products/test");
      expect(response.status).toBe(400);
    });
  });

  // GET /products/key/:id
  describe("GET /products/key/:id", () => {
    test("/products/key/650698cfb8318065fca250be - should be return 200 status code", async () => {
      const response = await supertest(app).get(
        "/products/key/650698cfb8318065fca250be"
      );
      expect(response.status).toBe(200);
    });
    test("/products/key/650698cfb8318065fca250be - should be defined", async () => {
      const response = await supertest(app).get(
        "/products/key/650698cfb8318065fca250be"
      );
      expect(response.body.product).toBeDefined();
    });
    test("/products/key/64a7ea5ff34df65abcbea671 - should be return 404 status code", async () => {
      const response = await supertest(app).get(
        "/products/key/64a7ea5ff34df65abcbea671"
      );
      expect(response.status).toBe(404);
    });
    test("/products/key/64a7ea5ff34df65abcbea671 - should be undefined", async () => {
      const response = await supertest(app).get(
        "/products/key/64a7ea5ff34df65abcbea671"
      );
      expect(response.body.product).not.toBeDefined();
    });
    test("/products/key/ - should be return 400 status code", async () => {
      const response = await supertest(app).get("/products/key/");
      expect(response.status).toBe(400);
    });
  });

  // GET /products/search?q=<queries>
  describe("GET /products/search?q=<query>", () => {
    test("/products/search?q=<query> - should be return 200 status code", async () => {
      const response = await supertest(app).get("/products/search?q=");
      expect(response.status).toBe(200);
    });
    test("/products/search?q=<query> - should be defined", async () => {
      const response = await supertest(app).get("/products/search?q=");
      expect(response.body.products).toBeDefined();
    });
    test("/products/search?q=<query> - should be return 200 status code", async () => {
      const response = await supertest(app).get("/products/search?q=samsung");
      expect(response.status).toBe(200);
    });
    test(`/products/search?q=<query> - should be defined a products that includes "samsung"`, async () => {
      const response = await supertest(app).get("/products/search?q=samsung");
      expect(response.body.products).toBeDefined();
    });
    test("/products/search - should be return 400 status code", async () => {
      const response = await supertest(app).get("/products/search");
      expect(response.status).toBe(400);
    });
  });

  // GET /products/categories
  describe("GET /products/categories || GET /products/categories/:category", () => {
    test("/products/categories - should be return 200 status code", async () => {
      const response = await supertest(app).get("/products/categories");
      expect(response.status).toBe(200);
    });
    test("/products/categories/jewelry - should be return 200 status code", async () => {
      const response = await supertest(app).get("/products/categories/jewelry");
      expect(response.status).toBe(200);
    });
    test("/products/categories/furniture - should be return 200 status code", async () => {
      const response = await supertest(app).get(
        "/products/categories/furniture"
      );
      expect(response.status).toBe(200);
    });
    test("/products/categories/mens - should be return 200 status code", async () => {
      const response = await supertest(app).get("/products/categories/mens");
      expect(response.status).toBe(200);
    });
    test("/products/categories/womens - should be return 200 status code", async () => {
      const response = await supertest(app).get("/products/categories/womens");
      expect(response.status).toBe(200);
    });
    test("/products/categories/electronics - should be return 200 status code", async () => {
      const response = await supertest(app).get(
        "/products/categories/electronics"
      );
      expect(response.status).toBe(200);
    });
    test("/products/categories/electronics - should be defined", async () => {
      const response = await supertest(app).get(
        "/products/categories/electronics"
      );
      expect(response.body.products).toBeDefined();
    });
    test("/products/categories/test - should be undefined", async () => {
      const response = await supertest(app).get("/products/categories/test");
      expect(response.body.products).not.toBeDefined();
    });
    test("/products/categories/test - should be return 404 status code", async () => {
      const response = await supertest(app).get("/products/categories/test");
      expect(response.status).toBe(404);
    });
    test("/products/categories/jewelry?limit=5 - should be return 5 products items", async () => {
      const response = await supertest(app).get(
        "/products/categories/jewelry?limit=5"
      );
      expect(response.body.products.length).toBe(5);
    });
    test("/products/categories/jewelry?skip=5 - should be return 5 products items", async () => {
      const response = await supertest(app).get(
        "/products/categories/jewelry?skip=5"
      );
      expect(response.body.products.length).toBe(5);
    });
  });
});
