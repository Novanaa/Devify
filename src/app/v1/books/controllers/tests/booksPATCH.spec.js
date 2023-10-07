import supertest from "supertest";
import app from "../../../../../app.js";

describe("PATCH - /books", () => {
  describe("PATCH - /books/<id>", () => {
    test("/books/1 - should be return 200 status code", async () => {
      const response = await supertest(app)
        .patch("/books/1")
        .field({ title: "ini update dari supertest hehehhe" });
      expect(response.status).toBe(200);
    });
    test("/books/1 - should be return 200 status code", async () => {
      const response = await supertest(app).patch("/books/1").field({
        title: "ini update dari supertest hehehhe",
        image: "hehehehe",
      });
      expect(response.status).toBe(200);
    });
    test("/books/1 - should be return 200 status code", async () => {
      const response = await supertest(app).patch("/books/1").field({
        title: "ini update dari supertest hehehhe",
        poster: "hehehehe",
      });
      expect(response.status).toBe(200);
    });
    test("/books/1 - should be return 200 status code", async () => {
      const response = await supertest(app)
        .patch("/books/1")
        .field({
          title: "ini update dari supertest hehehhe",
        })
        .attach("image", "./public/img/books/poster/2.jpg");
      expect(response.status).toBe(200);
    });
    test("/books/1 - should be return 422 status code if request files extension is not supported", async () => {
      const response = await supertest(app)
        .patch("/books/1")
        .field({ category: "Comsology" })
        .attach(
          "image",
          "./src/app/v1/books/controllers/tests/assests/img/icoimage.ico"
        );
      expect(response.status).toBe(422);
    });
    test("/books/1 - should be return 422 status code if request files size is more than 5mb", async () => {
      const response = await supertest(app)
        .patch("/books/1")
        .field({ category: "Comsology" })
        .attach(
          "image",
          "./src/app/v1/books/controllers/tests/assests/img/5mb.jpg"
        );
      expect(response.status).toBe(422);
    });
    test("/books/1 - should be return 422 status code if the request files is more than two", async () => {
      const response = await supertest(app)
        .patch("/books/1")
        .field({ category: "Comsology" })
        .attach("image", "./public/img/books/poster/1.jpg")
        .attach("image", "./public/img/books/poster/2.jpg");
      expect(response.status).toBe(422);
    });
    test("/books/test - should be return 422 status code if the request id is not numberic", async () => {
      const response = await supertest(app)
        .patch("/books/test")
        .field({ title: "testsssss" });
      expect(response.status).toBe(422);
    });
  });

  describe("PATCH - /books/<id>", () => {
    test("/books/650af28488a36e575c6a04ad - should be return 200 status code", async () => {
      const response = await supertest(app)
        .patch("/books/key/650af28488a36e575c6a04ad")
        .field({ title: "ini update dari supertest hehehhe" });
      expect(response.status).toBe(200);
    });
    test("/books/key/650af28488a36e575c6a04ad - should be return 200 status code", async () => {
      const response = await supertest(app)
        .patch("/books/key/650af28488a36e575c6a04ad")
        .field({
          title: "ini update dari supertest hehehhe",
          image: "hehehehe",
        });
      expect(response.status).toBe(200);
    });
    test("/books/key/650af28488a36e575c6a04ad - should be return 200 status code", async () => {
      const response = await supertest(app)
        .patch("/books/key/650af28488a36e575c6a04ad")
        .field({
          title: "ini update dari supertest hehehhe",
          poster: "hehehehe",
        });
      expect(response.status).toBe(200);
    });
    test("/books/key/650af28488a36e575c6a04ad - should be return 200 status code", async () => {
      const response = await supertest(app)
        .patch("/books/key/650af28488a36e575c6a04ad")
        .field({
          title: "ini update dari supertest hehehhe",
        })
        .attach("image", "./public/img/books/poster/2.jpg");
      expect(response.status).toBe(200);
    });
    test("/books/key/650af28488a36e575c6a04ad - should be return 422 status code if request files extension is not supported", async () => {
      const response = await supertest(app)
        .patch("/books/key/650af28488a36e575c6a04ad")
        .field({ category: "Comsology" })
        .attach(
          "image",
          "./src/app/v1/books/controllers/tests/assests/img/icoimage.ico"
        );
      expect(response.status).toBe(422);
    });
    test("/books/key/650af28488a36e575c6a04ad - should be return 422 status code if request files size is more than 5mb", async () => {
      const response = await supertest(app)
        .patch("/books/key/650af28488a36e575c6a04ad")
        .field({ category: "Comsology" })
        .attach(
          "image",
          "./src/app/v1/books/controllers/tests/assests/img/5mb.jpg"
        );
      expect(response.status).toBe(422);
    });
    test("/books/key/650af28488a36e575c6a04ad - should be return 422 status code if the request files is more than two", async () => {
      const response = await supertest(app)
        .patch("/books/key/650af28488a36e575c6a04ad")
        .field({ category: "Comsology" })
        .attach("image", "./public/img/books/poster/1.jpg")
        .attach("image", "./public/img/books/poster/2.jpg");
      expect(response.status).toBe(422);
    });
    test("/books/key/test - should be return 422 status code if the request id is not numberic", async () => {
      const response = await supertest(app)
        .patch("/books/key/test")
        .field({ title: "testsssss" });
      expect(response.status).toBe(422);
    });
  });
});
