import supertest from "supertest";
import app from "../../../../../app.js";

describe("DELETE - /v1/books/<id> || /v1/books/key/<id>", () => {
  describe("DELETE - /v1/books/<id>", () => {
    test("/v1/books/1 - should be return 200 status code", async () => {
      const response = await supertest(app).delete("/v1/books/29");
      expect(response.status).toBe(200);
    });
    test("/v1/books/100 - should be return 404 status code if the book data was not found", async () => {
      const response = await supertest(app).delete("/v1/books/100");
      expect(response.status).toBe(404);
    });
    test("/v1/books/test - should be return 422 status code if the request params id is not a numberic", async () => {
      const response = await supertest(app).delete("/v1/books/test");
      expect(response.status).toBe(422);
    });
  });
  describe("DELETE - /v1/books/key/<id>", () => {
    test("/v1/books/key/65222f8309d11f6da3e13732 - should be return 200 status code", async () => {
      const response = await supertest(app).delete(
        "/v1/books/key/65222f8309d11f6da3e13732"
      );
      expect(response.status).toBe(200);
    });
    test("/v1/books/100 - should be return 404 status code if the book data was not found", async () => {
      const response = await supertest(app).delete(
        "/v1/books/key/65222f8309d11f6da3e13732"
      );
      expect(response.status).toBe(404);
    });
    test("/v1/books/test - should be return 422 status code if the request params id is not a MongoDBId", async () => {
      const response = await supertest(app).delete("/v1/books/key/test");
      expect(response.status).toBe(422);
    });
  });
});
