import supertest from "supertest";
import app from "../../../../../app.js";

describe("POST - /auth", () => {
  describe("Tests for - /auth/login", () => {
    test("/auth/login - should be return 200 status code", async () => {
      const response = await supertest(app).post("/auth/login").field({
        name: "Nova",
        email: "ini email",
        password: "hello ini password aku",
      });
      expect(response.status).toBe(200);
    });
    test("/auth/login - should be return 200 status code", async () => {
      const response = await supertest(app).post("/auth/login").field({
        name: "Nova",
        email: "ini email",
        password: "hello ini password aku",
      });
      expect(response.body.token).toBeDefined();
    });
    test("/auth/login - should be return 422 status code if the password field wasn't filled", async () => {
      const response = await supertest(app).post("/auth/login").field({
        name: "Nova",
        email: "ini email",
      });
      expect(response.status).toBe(422);
    });
    test("/auth/login - should be return 422 status code if the email field wasn't match", async () => {
      const response = await supertest(app).post("/auth/login").field({
        name: "Nova",
        email: "ini bukan email",
        password: "hello ini password aku",
      });
      expect(response.status).toBe(422);
    });
    test("/auth/login - should be return 422 status code if the email field wasn't filled", async () => {
      const response = await supertest(app).post("/auth/login").field({
        name: "Nova",
        password: "hello ini password aku",
      });
      expect(response.status).toBe(422);
    });
    test("/auth/login - should be return 422 status code if the password does not correct", async () => {
      const response = await supertest(app).post("/auth/login").field({
        name: "Nova",
        email: "ini email",
        password: "hello ini bukan password aku",
      });
      expect(response.status).toBe(422);
    });
    test("/auth/login - should be return 404 status code if the user wasn't found", async () => {
      const response = await supertest(app).post("/auth/login").field({
        name: "Nov",
        email: "ini email",
        password: "hello ini password aku",
      });
      expect(response.status).toBe(404);
    });
  });
});
