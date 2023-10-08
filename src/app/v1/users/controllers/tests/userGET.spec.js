import supertest from "supertest";
import app from "../../../../../app.js";

describe("Users - GET", () => {
  describe("GET - /v1/users", () => {
    test("/v1/users - should be return 200 status code", async () => {
      const response = await supertest(app).get("/v1/users");
      expect(response.status).toBe(200);
    });
    test("/v1/users - should be defined", async () => {
      const response = await supertest(app).get("/v1/users");
      expect(response.body.users).toBeDefined();
    });
    test("/v1/users - v1/users data should be return 10 items", async () => {
      const response = await supertest(app).get("/v1/users?limit=10");
      expect(response.body.users.length).toBe(10);
    });
  });
  describe("GET - /v1/users/<id>", () => {
    test("/v1/users/1 - should be return 200 status code", async () => {
      const response = await supertest(app).get("/v1/users/1");
      expect(response.status).toBe(200);
    });
    test("/v1/users/1 - should be defined", async () => {
      const response = await supertest(app).get("/v1/users/1");
      expect(response.body.user).toBeDefined();
    });
    test("/v1/users/100 - should be return 404 status code if the user data was not found", async () => {
      const response = await supertest(app).get("/v1/users/100");
      expect(response.status).toBe(404);
    });
    test("/v1/users/<string> - should be return 422 status code if the request id is not numberic", async () => {
      const response = await supertest(app).get("/v1/users/test");
      expect(response.status).toBe(422);
    });
  });
  describe("GET - /v1/users/key/<id>", () => {
    test("/v1/users/key/6521f450712bddd953596451 - should be return 200 status code", async () => {
      const response = await supertest(app).get(
        "/v1/users/key/6521f450712bddd953596451"
      );
      expect(response.status).toBe(200);
    });
    test("/v1/users/key/6521f450712bddd953596451 - should be defined", async () => {
      const response = await supertest(app).get(
        "/v1/users/key/6521f450712bddd953596451"
      );
      expect(response.body.user).toBeDefined();
    });
    test("/v1/users/key/64a975166d8d44a2a0b70cf0 - should be return 404 status code if the user data was not found", async () => {
      const response = await supertest(app).get(
        "/v1/users/key/64a975166d8d44a2a0b70cf0"
      );
      expect(response.status).toBe(404);
    });
    test("/v1/users/<string> - should be return 422 status code if the request id is not MongoDBId", async () => {
      const response = await supertest(app).get("/v1/users/key/test");
      expect(response.status).toBe(422);
    });
  });
  describe("GET - /v1/users/search?q=<String>", () => {
    test("/v1/users/search?q=<query> - should be return 200 status code", async () => {
      const response = await supertest(app).get("/v1/users/search?q=");
      expect(response.status).toBe(200);
    });
    test("/v1/users/search?q=<query> - should be defined", async () => {
      const response = await supertest(app).get("/v1/users/search?q=");
      expect(response.body.users).toBeDefined();
    });
    test("/v1/users/search?q=<query> - should be return 200 status code", async () => {
      const response = await supertest(app).get("/v1/users/search?q=anton");
      expect(response.status).toBe(200);
    });
    test("/v1/users/search - should be return 400 status code", async () => {
      const response = await supertest(app).get("/v1/users/search");
      expect(response.status).toBe(400);
    });
  });
});
