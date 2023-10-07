import supertest from "supertest";
import app from "../../../../app.js";

describe("Main Routes unit-test", () => {
  test("/ - should be return 200 status code", async () => {
    const response = await supertest(app).get("/");
    expect(response.status).toBe(200);
  });
  test("/ - should be definend", async () => {
    const response = await supertest(app).get("/");
    expect(response.body).toBeDefined();
  });
});
