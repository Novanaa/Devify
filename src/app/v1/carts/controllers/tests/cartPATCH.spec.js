import supertest from "supertest";
import app from "../../../../../app.js";

describe("PATCH - carts", () => {
  describe("PATCH - /v1/carts/<id>", () => {
    test("should be return 404 status code if the data was not found", async () => {
      const response = await supertest(app).patch("/v1/carts/1000").field({
        id: 5,
      });
      expect(response.status).toBe(404);
    });
    test("should be return 422 status code if the request body is null", async () => {
      const response = await supertest(app).patch("/v1/carts/1");
      expect(response.status).toBe(422);
    });
    test("should be return 422 status code if the request id is not a number", async () => {
      const response = await supertest(app).patch("/v1/carts/test");
      expect(response.status).toBe(422);
    });
    test("should be return 200 status code", async () => {
      const response = await supertest(app).patch("/v1/carts/1").field({
        delivery_cost: 10,
        free_delivery: false,
      });
      expect(response.status).toBe(200);
    });
  });
  describe("PATCH - /v1/carts/key/<id>", () => {
    test("should be return 404 status code if the data was not found", async () => {
      const response = await supertest(app)
        .patch("/v1/carts/key/65194a474ba5d00a02216456")
        .field({
          id: 5,
        });
      expect(response.status).toBe(404);
    });
    test("should be return 422 status code if the request body is null", async () => {
      const response = await supertest(app).patch(
        "/v1/carts/key/65194a474bb5d00a02216456"
      );
      expect(response.status).toBe(422);
    });
    test("should be return 422 status code if the request id is not a MongoDBID", async () => {
      const response = await supertest(app).patch("/v1/carts/key/test");
      expect(response.status).toBe(422);
    });
    test("should be return 200 status code", async () => {
      const response = await supertest(app)
        .patch("/v1/carts/key/6519312500df9423f8d42d07")
        .field({
          delivery_cost: 10,
          free_delivery: false,
        });
      expect(response.status).toBe(200);
    });
  });
});
