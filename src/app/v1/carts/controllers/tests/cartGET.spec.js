import supertest from "supertest";
import app from "../../../../../app.js";

describe("GET - Carts", () => {
  describe("GET - /v1/carts/", () => {
    test("should be return 200 status code", async () => {
      const response = await supertest(app).get("/v1/carts");
      expect(response.status).toBe(200);
    });
    test("should be return 5 carts items", async () => {
      const response = await supertest(app).get("/v1/carts?limit=5");
      expect(response.body.carts.length).toBe(5);
      expect(response.status).toBe(200);
    });
    test("should be return 15 carts items", async () => {
      const response = await supertest(app).get("/v1/carts?skip=5");
      expect(response.body.carts.length).toBe(15);
      expect(response.status).toBe(200);
    });
    test("should be return 10 carts items", async () => {
      const response = await supertest(app).get("/v1/carts?skip=5&limit=10");
      expect(response.body.carts.length).toBe(10);
      expect(response.status).toBe(200);
    });
  });
  describe("GET - /v1/carts/<id>", () => {
    test("should be return 401 status code", async () => {
      const response = await supertest(app).get("/v1/carts/1");
      expect(response.status).toBe(401);
    });
    test("should be return 200 status code", async () => {
      const response = await supertest(app)
        .get("/v1/carts/1")
        .set(
          "Authorization",
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6IlRhc2hpYSBQdWNrZXR0IiwiZW1haWwiOiJvcmllbnRhdGlvbjIwODBAeWFuZGV4LmNvbSIsImlhdCI6MTY5NjE1MTEyNiwiZXhwIjoxNjk2MTUxMjQ2fQ.GGaYx77jEUNxbpHm04xphXapMgveMO0pstq-lFbEma8"
        );
      expect(response.status).toBe(200);
    });
  });
});
