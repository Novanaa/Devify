import supertest from "supertest";
import app from "../../../../../app.js";

describe("Users - GET", () => {
  describe("GET - /users", () => {
    test("/users - should be return 200 status code", async () => {
      const response = await supertest(app).get("/users");
      expect(response.status).toBe(200);
    });
    test("/users - should be defined", async () => {
      const response = await supertest(app).get("/users");
      expect(response.body.users).toBeDefined();
    });
    test("/users - users data should be return 10 items", async () => {
      const response = await supertest(app).get("/users?limit=10");
      expect(response.body.users.length).toBe(10);
    });
    test("/users - users data should be return 35 items", async () => {
      const response = await supertest(app).get("/users?skip=5");
      expect(response.body.users.length).toBe(35);
    });
  });
  describe("GET - /users/<id>", () => {
    test("/users/1 - should be return 200 status code", async () => {
      const response = await supertest(app).get("/users/1");
      expect(response.status).toBe(200);
    });
    test("/users/1 - should be defined", async () => {
      const response = await supertest(app).get("/users/1");
      expect(response.body.user).toBeDefined();
    });
    test("/users/100 - should be return 404 status code if the user data was not found", async () => {
      const response = await supertest(app).get("/users/100");
      expect(response.status).toBe(404);
    });
    test("/users/<string> - should be return 422 status code if the request id is not numberic", async () => {
      const response = await supertest(app).get("/users/test");
      expect(response.status).toBe(422);
    });
  });
  describe("GET - /users/key/<id>", () => {
    test("/users/key/64a975166d8d44a6a0b70cf0 - should be return 200 status code", async () => {
      const response = await supertest(app).get(
        "/users/key/64a975166d8d44a6a0b70cf0"
      );
      expect(response.status).toBe(200);
    });
    test("/users/key/64a975166d8d44a6a0b70cf0 - should be defined", async () => {
      const response = await supertest(app).get(
        "/users/key/64a975166d8d44a6a0b70cf0"
      );
      expect(response.body.user).toBeDefined();
    });
    test("/users/key/64a975166d8d44a2a0b70cf0 - should be return 404 status code if the user data was not found", async () => {
      const response = await supertest(app).get(
        "/users/key/64a975166d8d44a2a0b70cf0"
      );
      expect(response.status).toBe(404);
    });
    test("/users/<string> - should be return 422 status code if the request id is not MongoDBId", async () => {
      const response = await supertest(app).get("/users/key/test");
      expect(response.status).toBe(422);
    });
  });
  describe("GET - /users/search?q=<String>", () => {
    test("/users/search?q=<query> - should be return 200 status code", async () => {
      const response = await supertest(app).get("/users/search?q=");
      expect(response.status).toBe(200);
    });
    test("/users/search?q=<query> - should be defined", async () => {
      const response = await supertest(app).get("/users/search?q=");
      expect(response.body.users).toBeDefined();
    });
    test("/users/search?q=<query> - should be return 200 status code", async () => {
      const response = await supertest(app).get("/users/search?q=anton");
      expect(response.status).toBe(200);
    });
    test("/users/search - should be return 400 status code", async () => {
      const response = await supertest(app).get("/users/search");
      expect(response.status).toBe(400);
    });
  });
});
