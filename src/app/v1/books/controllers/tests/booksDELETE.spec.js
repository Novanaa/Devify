import supertest from "supertest";
import app from "../../../../../app.js";

describe("DELETE - /books/<id> || /books/key/<id>", () => {
  describe("DELETE - /books/<id>", () => {
    test("/books/1 - should be return 200 status code", async () => {
      const response = await supertest(app).delete("/books/2");
      expect(response.status).toBe(200);
    });
    test("/books/100 - should be return 404 status code if the book data was not found", async () => {
      const response = await supertest(app).delete("/books/100");
      expect(response.status).toBe(404);
    });
    test("/books/test - should be return 422 status code if the request params id is not a numberic", async () => {
      const response = await supertest(app).delete("/books/test");
      expect(response.status).toBe(422);
    });
  });
  describe("DELETE - /books/key/<id>", () => {
    test("/books/key/650af29d88a36e575c6a04b1 - should be return 200 status code", async () => {
      const response = await supertest(app).delete(
        "/books/key/650af29d88a36e575c6a04b1"
      );
      expect(response.status).toBe(200);
    });
    test("/books/100 - should be return 404 status code if the book data was not found", async () => {
      const response = await supertest(app).delete(
        "/books/key/650af29d88a36e575c6ay4b1"
      );
      expect(response.status).toBe(404);
    });
    test("/books/test - should be return 422 status code if the request params id is not a MongoDBId", async () => {
      const response = await supertest(app).delete("/books/key/test");
      expect(response.status).toBe(422);
    });
  });
});
