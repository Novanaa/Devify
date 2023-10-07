import supertest from "supertest";
import app from "../../../../../app.js";

describe("Products - POST", () => {
  describe("POST - /products", () => {
    test("/products - should be return 201 status code", async () => {
      const response = await supertest(app)
        .post("/products")
        .field({ category: "Jewelry" })
        .attach("image", "./public/img/books/poster/1.jpg");
      expect(response.status).toBe(201);
    });
    test("/products - should be return 201 status code", async () => {
      const response = await supertest(app)
        .post("/products")
        .field({ category: "jewelry", image: "hehehe" });
      expect(response.status).toBe(201);
    });
    test("/products - should be return 201 status code", async () => {
      const response = await supertest(app)
        .post("/products")
        .field({ category: "jewelry" });
      expect(response.status).toBe(422);
    });
    test("/products - request body success should be true", async () => {
      const response = await supertest(app)
        .post("/products")
        .field({ category: "jewelry" })
        .attach("image", "./public/img/books/poster/1.jpg");
      expect(response.body.success).toBe(true);
    });
    test("/products - should be return 422 status code if request body category is undefined", async () => {
      const response = await supertest(app)
        .post("/products")
        .attach("image", "./public/img/books/poster/1.jpg");
      expect(response.status).toBe(422);
    });
    test("/products - should be return 422 status code if request files size is more than 5mb", async () => {
      const response = await supertest(app)
        .post("/products")
        .field({ category: "Jewelry" })
        .attach(
          "image",
          "./src/app/v1/products/controllers/tests/assests/img/5mb.jpg"
        );
      expect(response.status).toBe(422);
    });
  });
  test("/products - should be return 422 status code if request files extension is not supported", async () => {
    const response = await supertest(app)
      .post("/products")
      .field({ category: "Jewelry" })
      .attach(
        "image",
        "./src/app/v1/products/controllers/tests/assests/img/icoimage.ico"
      );
    expect(response.status).toBe(422);
  });
  test("/products - should be return 422 status code if the request files is more than two", async () => {
    const response = await supertest(app)
      .post("/products")
      .field({ category: "Jewelry" })
      .attach("image", "./public/img/books/poster/1.jpg")
      .attach("image", "./public/img/books/poster/2.jpg");
    expect(response.status).toBe(422);
  });
  test("/products - should be return 422 status code if the request files and request body image is undefined", async () => {
    const response = await supertest(app)
      .post("/products")
      .field({ category: "Jewelry" });
    expect(response.status).toBe(422);
  });
  test("/products - should be return 422 status code if request body category is not valid", async () => {
    const response = await supertest(app)
      .post("/products")
      .field({ category: "sdfhgudhfgu" })
      .attach("image", "./public/img/books/poster/1.jpg");
    expect(response.status).toBe(422);
  });
});
