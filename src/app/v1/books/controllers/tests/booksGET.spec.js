import supertest from "supertest";
import app from "../../../../../app.js";

describe("Books - GET", () => {
  describe("GET - /books", () => {
    test("/books - should be return 200 status code", async () => {
      const response = await supertest(app).get("/books");
      expect(response.status).toBe(200);
    });
    test("/books - should be return 200 status code", async () => {
      const response = await supertest(app).get("/books?sort=desc");
      expect(response.body.books.length).toBe(20);
      expect(response.status).toBe(200);
    });
    test("/books - should be return 200 status code", async () => {
      const response = await supertest(app).get("/books?skip=5");
      expect(response.body.books.length).toBe(15);
      expect(response.status).toBe(200);
    });
    test("/books - should be return 200 status code", async () => {
      const response = await supertest(app).get("/books?limit=5");
      expect(response.body.books.length).toBe(5);
      expect(response.status).toBe(200);
    });
  });
  describe("GET - /books/<id>", () => {
    test("/books/1 - should be return 200 status code", async () => {
      const response = await supertest(app).get("/books/1");
      expect(response.status).toBe(200);
    });
    test("/books/1 - should be return 422 status code if the params id is not numberic", async () => {
      const response = await supertest(app).get("/books/test");
      expect(response.status).toBe(422);
    });
    test("/books/1 - should be return 404 status code if the book data was not found", async () => {
      const response = await supertest(app).get("/books/100");
      expect(response.status).toBe(404);
    });
  });
  describe("GET - /books/<id>", () => {
    test("/books/1 - should be return 200 status code", async () => {
      const response = await supertest(app).get(
        "/books/key/650a7b4c6571ac2061f0c375"
      );
      expect(response.status).toBe(200);
    });
    test("/books/1 - should be return 422 status code if the params id is not numberic", async () => {
      const response = await supertest(app).get("/books/key/test");
      expect(response.status).toBe(422);
    });
    test("/books/1 - should be return 404 status code if the book data was not found", async () => {
      const response = await supertest(app).get(
        "/books/key/650a7c4c6571ac2061f0c375"
      );
      expect(response.status).toBe(404);
    });
  });
  describe("GET - /books/search?q=<String>", () => {
    test("/books/search?q=inter - should be return 200 status code", async () => {
      const response = await supertest(app).get("/books/search?q=inter");
      expect(response.status).toBe(200);
    });
    test("/books/search - should be return 400 status code if query params q is not defined", async () => {
      const response = await supertest(app).get("/books/search");
      expect(response.status).toBe(400);
    });
  });
  describe("GET - /books/categories/<category>", () => {
    test("/books/categories/cosmology - should be return 200 status code", async () => {
      const response = await supertest(app).get("/books/categories/cosmology");
      expect(response.status).toBe(200);
    });
    test("/books/categories/test - should be return 404 status code if the category is not exist", async () => {
      const response = await supertest(app).get("/books/categories/test");
      expect(response.status).toBe(404);
    });
  });
});
