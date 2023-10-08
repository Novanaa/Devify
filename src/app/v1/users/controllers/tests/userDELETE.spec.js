import supertest from "supertest";
import app from "../../../../../app.js";

describe("DELETE - /users", () => {
  describe("DELETE - /v1/users/<id>", () => {
    test("/v1/users/1 - should be return 200 status code", async () => {
      const response = await supertest(app).delete("/v1/users/55");
      expect(response.status).toBe(200);
    });
    test("/v1/users/100 - should be return 404 status code if the user data was not found", async () => {
      const response = await supertest(app).delete("/v1/users/100");
      expect(response.status).toBe(404);
    });
    test("/v1/users/test - should be return 422 status code if the request params id is not a numberic", async () => {
      const response = await supertest(app).delete("/v1/users/test");
      expect(response.status).toBe(422);
    });
  });
  describe("DELETE - /v1/users/key/<id>", () => {
    test("/v1/users/key/65222b7c8eeaffde4fabfa0b - should be return 200 status code", async () => {
      const response = await supertest(app).delete(
        "/v1/users/key/65222b7c8eeaffde4fabfa0b"
      );
      expect(response.status).toBe(200);
    });
    test("/v1/users/key/test - should be return 422 status code if the request params id is not a MongoDBID", async () => {
      const response = await supertest(app).delete("/v1/users/key/test");
      expect(response.status).toBe(422);
    });
  });
});
