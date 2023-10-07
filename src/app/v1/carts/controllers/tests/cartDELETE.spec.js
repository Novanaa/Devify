import supertest from "supertest";
import app from "../../../../../app.js";

describe("DELETE - carts", () => {
  describe("DELETE - /v1/carts/<id>", () => {
    test("should be return 422 status code if the request id is not a number", async () => {
      const response = await supertest(app).delete("/v1/carts/test");
      expect(response.status).toBe(422);
    });
    test("should be return 404 status code if the data was not found", async () => {
      const response = await supertest(app).delete("/v1/carts/1000");
      expect(response.status).toBe(404);
    });
    test("should be return 200 status code", async () => {
      const response = await supertest(app).delete("/v1/carts/20");
      expect(response.status).toBe(200);
    });
  });
  describe("DELETE - /v1/carts/key/<id>", () => {
    test("should be return 422 status code if the request id is not a MongoDBID", async () => {
      const response = await supertest(app).delete("/v1/carts/key/test");
      expect(response.status).toBe(422);
    });
    test("should be return 404 status code if the data was not found", async () => {
      const response = await supertest(app).delete(
        "/v1/carts/key/65194a474ab5d00a02216456"
      );
      expect(response.status).toBe(404);
    });
    test("should be return 200 status code", async () => {
      const response = await supertest(app).delete(
        "/v1/carts/key/6520b95b412402f0368e04ea"
      );
      expect(response.status).toBe(200);
    });
  });
});
