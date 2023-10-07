import supertest from "supertest";
import app from "../../../../../app.js";

describe("Books - POST", () => {
  describe("POST - /books", () => {
    test("/books - should be return 201 status code", async () => {
      const response = await supertest(app)
        .post("/books")
        .field({ category: "Comology" })
        .attach("image", "./public/img/books/poster/1.jpg");
      expect(response.status).toBe(201);
    });
    test("/books - should be return 201 status code", async () => {
      const response = await supertest(app)
        .post("/books")
        .field({ category: "Cosmology", image: "hehehe" });
      expect(response.status).toBe(201);
    });
    test("/books - request body success should be true", async () => {
      const response = await supertest(app)
        .post("/books")
        .field({ category: "Cosmology" })
        .attach("image", "./public/img/books/poster/1.jpg");
      expect(response.body.success).toBe(true);
    });
    test("/books - should be return 422 status code if request files size is more than 5mb", async () => {
      const response = await supertest(app)
        .post("/books")
        .field({ category: "Comsology" })
        .attach(
          "image",
          "./src/app/v1/books/controllers/tests/assests/img/5mb.jpg"
        );
      expect(response.status).toBe(422);
    });
  });
  test("/books - should be return 422 status code if request files extension is not supported", async () => {
    const response = await supertest(app)
      .post("/books")
      .field({ category: "Comsology" })
      .attach(
        "image",
        "./src/app/v1/books/controllers/tests/assests/img/icoimage.ico"
      );
    expect(response.status).toBe(422);
  });
  test("/books - should be return 422 status code if the request files is more than two", async () => {
    const response = await supertest(app)
      .post("/books")
      .field({ category: "Comsology" })
      .attach("image", "./public/img/books/poster/1.jpg")
      .attach("image", "./public/img/books/poster/2.jpg");
    expect(response.status).toBe(422);
  });
  test("/books - should be return 422 status code if the request files and request body image is undefined", async () => {
    const response = await supertest(app)
      .post("/books")
      .field({ category: "Comsology" });
    expect(response.status).toBe(422);
  });
});
