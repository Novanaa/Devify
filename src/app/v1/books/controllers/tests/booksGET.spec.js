import supertest from "supertest";
import app from "../../../../../app.js";

describe("Books - GET", () => {
  describe("GET - /v1/books", () => {
    test("/v1/books - should be return 200 status code", async () => {
      const response = await supertest(app).get("/v1/books");
      expect(response.status).toBe(200);
    });
    test("/v1/books - should be return 200 status code", async () => {
      const response = await supertest(app).get("/v1/books?sort=desc");
      expect(response.status).toBe(200);
    });
    test("/v1/books - should be return 200 status code", async () => {
      const response = await supertest(app).get("/v1/books?limit=5");
      expect(response.body.books.length).toBe(5);
      expect(response.status).toBe(200);
    });
  });
  describe("GET - /v1/books/<id>", () => {
    test("/v1/books/1 - should be return 200 status code", async () => {
      const response = await supertest(app).get("/v1/books/1");
      expect(response.status).toBe(200);
    });
    test("/v1/books/1 - should be return 422 status code if the params id is not numberic", async () => {
      const response = await supertest(app).get("/v1/books/test");
      expect(response.status).toBe(422);
    });
    test("/v1/books/1 - should be return 404 status code if the book data was not found", async () => {
      const response = await supertest(app).get("/v1/books/100");
      expect(response.status).toBe(404);
    });
  });
  describe("GET - /v1/books/<id>", () => {
    test("/v1/books/1 - should be return 200 status code", async () => {
      const response = await supertest(app).get(
        "/v1/books/key/6521c4eddd6a09edfd2c66a6"
      );
      expect(response.status).toBe(200);
    });
    test("/v1/books/1 - should be return 422 status code if the params id is not numberic", async () => {
      const response = await supertest(app).get("/v1/books/key/test");
      expect(response.status).toBe(422);
    });
    test("/v1/books/1 - should be return 404 status code if the book data was not found", async () => {
      const response = await supertest(app).get(
        "/v1/books/key/650a7c4c6571ac2061f0c375"
      );
      expect(response.status).toBe(404);
    });
  });
  describe("GET - /v1/books/search?q=<String>", () => {
    test("/v1/books/search?q=inter - should be return 200 status code", async () => {
      const response = await supertest(app).get("/v1/books/search?q=inter");
      expect(response.status).toBe(200);
    });
    test("/v1/books/search - should be return 400 status code if query params q is not defined", async () => {
      const response = await supertest(app).get("/v1/books/search");
      expect(response.status).toBe(400);
    });
  });
  describe("GET - /v1/books/categories/<category>", () => {
    test("/v1/books/categories/cosmology - should be return 200 status code", async () => {
      const response = await supertest(app).get(
        "/v1/books/categories/cosmology"
      );
      expect(response.status).toBe(200);
    });
    test("/v1/books/categories/test - should be return 404 status code if the category is not exist", async () => {
      const response = await supertest(app).get("/books/categories/test");
      expect(response.status).toBe(404);
    });
  });
});
