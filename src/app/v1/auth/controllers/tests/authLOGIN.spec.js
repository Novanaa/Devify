import supertest from "supertest";
import app from "../../../../../app.js";

describe("POST - /auth", () => {
  describe("Tests for - /v1/auth/login", () => {
    test("/v1/auth/login - should be return 200 status code", async () => {
      const response = await supertest(app).post("/v1/auth/login").field({
        name: "Elisha Peterson",
        email: "example@gmail.com",
        password: "h~F6r@{T",
      });
      expect(response.status).toBe(200);
    });
    test("/v1/auth/login - should be return 200 status code", async () => {
      const response = await supertest(app).post("/v1/auth/login").field({
        name: "Elisha Peterson",
        email: "example@gmail.com",
        password: "h~F6r@{T",
      });
      expect(response.body.token).toBeDefined();
    });
    test("/v1/auth/login - should be return 400 status code if the password field wasn't filled", async () => {
      const response = await supertest(app).post("/v1/auth/login").field({
        name: "Elisha Peterson",
        email: "stations1819@yandex.com",
      });
      expect(response.status).toBe(400);
    });
    test("/v1/auth/login - should be return 400 status code if the email field wasn't filled", async () => {
      const response = await supertest(app).post("/v1/auth/login").field({
        name: "Elisha Peterson",
        password: "h~F6r@{T",
      });
      expect(response.status).toBe(400);
    });
    test("/v1/auth/login - should be return 422 status code if the password does not correct", async () => {
      const response = await supertest(app).post("/v1/auth/login").field({
        name: "Elisha Peterson",
        email: "stations1819@yandex.com",
        password: "hello ini bukan password aku",
      });
      expect(response.status).toBe(422);
    });
    test("/v1/auth/login - should be return 401 status code if the user wasn't found", async () => {
      const response = await supertest(app).post("/v1/auth/login").field({
        name: "Nov",
        email: "stations1819@yandex.com",
        password: "h~F6r@{T",
      });
      expect(response.status).toBe(401);
    });
  });
});
