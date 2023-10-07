import supertest from "supertest";
import app from "../../../../../app.js";

describe("POST - /v1/carts", () => {
  test("should be return 201 status code", async () => {
    const response = await supertest(app)
      .post("/v1/carts")
      .send({
        userId: 1,
        products: [
          {
            productsId: 2,
            quantity: 1,
            price: 40,
          },
        ],
      });
    expect(response.status).toBe(201);
  });
  test("should be return 400 status code", async () => {
    const response = await supertest(app)
      .post("/v1/carts")
      .send({
        products: [
          {
            productsId: 2,
            quantity: 1,
            price: 40,
          },
        ],
      });
    expect(response.status).toBe(400);
  });
  test("should be return 422 status code", async () => {
    const response = await supertest(app).post("/v1/carts").send({});
    expect(response.status).toBe(422);
  });
});
