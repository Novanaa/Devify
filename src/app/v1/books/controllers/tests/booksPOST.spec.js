import supertest from "supertest";
import app from "../../../../../app.js";

describe("Books - POST", () => {
  describe("POST - /v1/books", () => {
    test("/v1/books - should be return 201 status code", async () => {
      const response = await supertest(app)
        .post("/v1/books")
        .field({ category: "Comology", title: "hehhe", author: "nopa" })
        .attach("image", "./public/img/books/poster/1.jpg");
      expect(response.status).toBe(201);
    });
    test("/v1/books - should be return 201 status code", async () => {
      const response = await supertest(app).post("/v1/books").field({
        category: "Comology",
        title: "hehhe",
        author: "nopa",
        poster: "hehhe",
      });
      expect(response.status).toBe(201);
    });
    test("/v1/books - request body success should be true", async () => {
      const response = await supertest(app)
        .post("/v1/books")
        .field({
          category: "Comology",
          title: "hehhe",
          author: "nopa",
        })
        .attach("image", "./public/img/books/poster/1.jpg");
      expect(response.body.success).toBe(true);
    });
    test("/v1/books - should be return 422 status code if request files size is more than 5mb", async () => {
      const response = await supertest(app)
        .post("/v1/books")
        .field({ category: "Comology", title: "hehhe", author: "nopa" })
        .attach(
          "image",
          "./src/app/v1/books/controllers/tests/assests/img/5mb.jpg"
        );
      expect(response.status).toBe(422);
    });
  });
  test("/v1/books - should be return 422 status code if request files extension is not supported", async () => {
    const response = await supertest(app)
      .post("/v1/books")
      .field({ category: "Comology", title: "hehhe", author: "nopa" })
      .attach(
        "image",
        "./src/app/v1/books/controllers/tests/assests/img/icoimage.ico"
      );
    expect(response.status).toBe(422);
  });
  test("/v1/books - should be return 422 status code if the request files is more than two", async () => {
    const response = await supertest(app)
      .post("/v1/books")
      .field({ category: "Comology", title: "hehhe", author: "nopa" })
      .attach("image", "./public/img/books/poster/1.jpg")
      .attach("image", "./public/img/books/poster/2.jpg");
    expect(response.status).toBe(422);
  });
  test("/v1/books - should be return 422 status code if the request files and request body image is undefined", async () => {
    const response = await supertest(app)
      .post("/v1/books")
      .field({ category: "Comology", title: "hehhe", author: "nopa" });
    expect(response.status).toBe(422);
  });
  test("/v1/books - should be return 422 status code if the request body is empty", async () => {
    const response = await supertest(app).post("/v1/books").field({});
    expect(response.status).toBe(422);
  });
});
