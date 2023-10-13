import supertest from "supertest";
import app from "../../../../../app.js";

describe("PATCH - users", () => {
  describe("PATCH - /v1/users/<id>", () => {
    test("should be return 200 status code", async () => {
      const response = await supertest(app).patch("/v1/users/1").field({
        name: "Kadek Nova",
      });
      expect(response.status).toBe(200);
    });
    test("should be return 200 status code", async () => {
      const response = await supertest(app).patch("/v1/users/1").field({
        name: "Kadek Nova",
      });
      expect(response.body.success).toBe(true);
    });
    test("should be return 200 status code", async () => {
      const response = await supertest(app).patch("/v1/users/1").field({
        name: "Kadek Nova",
        picture: "hehehe",
      });
      expect(response.status).toBe(200);
    });
    test("should be return 200 status code", async () => {
      const response = await supertest(app).patch("/v1/users/1").field({
        name: "Kadek Nova",
        image: "hehehe",
      });
      expect(response.status).toBe(200);
    });
    test("should be return 200 status code", async () => {
      const response = await supertest(app)
        .patch("/v1/users/1")
        .field({
          name: "Kadek Nova",
        })
        .attach("image", "./public/img/books/poster/1.jpg");
      expect(response.status).toBe(200);
    });
    test("should be return 422 status code if the field does not filled", async () => {
      const response = await supertest(app).patch("/v1/users/1").field({});
      expect(response.status).toBe(422);
    });
    test("should be return 422 status code if the request id is not numberic", async () => {
      const response = await supertest(app).patch("/v1/users/test").field({
        name: "Nova",
      });
      expect(response.status).toBe(422);
    });
    test("should be return 422 status code if the image ext is not supported", async () => {
      const response = await supertest(app)
        .patch("/v1/users/1")
        .field({ name: "Nova" })
        .attach(
          "image",
          "./src/app/v1/products/controllers/tests/assests/img/icoimage.ico"
        );
      expect(response.status).toBe(422);
    });
    test("should be return 422 status code if the image file size was more than 5mb", async () => {
      const response = await supertest(app)
        .patch("/v1/users/1")
        .field({ name: "Nova" })
        .attach(
          "image",
          "./src/app/v1/products/controllers/tests/assests/img/5mb.jpg"
        );
      expect(response.status).toBe(422);
    });
    test("should be return 422 status code if the request files is more than one", async () => {
      const response = await supertest(app)
        .patch("/v1/users/1")
        .field({ name: "Nova" })
        .attach("image", "./public/img/books/poster/1.jpg")
        .attach("image", "./public/img/books/poster/2.jpg");
      expect(response.status).toBe(422);
    });
  });
  describe("PATCH - /v1/users/key/<id>", () => {
    test("should be return 200 status code", async () => {
      const response = await supertest(app)
        .patch("/v1/users/key/6521f450712bddd953596452")
        .field({
          name: "Kadek Nova",
        });
      expect(response.status).toBe(200);
    });
    test("should be return 200 status code", async () => {
      const response = await supertest(app)
        .patch("/v1/users/key/6521f450712bddd953596452")
        .field({
          name: "Kadek Nova",
        });
      expect(response.body.success).toBe(true);
    });
    test("should be return 200 status code", async () => {
      const response = await supertest(app)
        .patch("/v1/users/key/6521f450712bddd953596452")
        .field({
          name: "Kadek Nova",
          picture: "hehehe",
        });
      expect(response.status).toBe(200);
    });
    test("should be return 200 status code", async () => {
      const response = await supertest(app)
        .patch("/v1/users/key/6521f450712bddd953596452")
        .field({
          name: "Kadek Nova",
          image: "hehehe",
        });
      expect(response.status).toBe(200);
    });
    test("should be return 200 status code", async () => {
      const response = await supertest(app)
        .patch("/v1/users/key/6521f450712bddd953596452")
        .field({
          name: "Kadek Nova",
        })
        .attach("image", "./public/img/books/poster/1.jpg");
      expect(response.status).toBe(200);
    });
    test("should be return 422 status code if the field does not filled", async () => {
      const response = await supertest(app)
        .patch("/v1/users/key/6521f450712bddd953596452")
        .field({});
      expect(response.status).toBe(422);
    });
    test("should be return 422 status code if the request id is not MongoDBID", async () => {
      const response = await supertest(app).patch("/v1/users/key/test").field({
        name: "Nova",
      });
      expect(response.status).toBe(422);
    });
    test("should be return 422 status code if the image ext is not supported", async () => {
      const response = await supertest(app)
        .patch("/v1/users/key/6521f450712bddd953596452")
        .field({ name: "Nova" })
        .attach(
          "image",
          "./src/app/v1/products/controllers/tests/assests/img/icoimage.ico"
        );
      expect(response.status).toBe(422);
    });
    test("should be return 422 status code if the image file size was more than 5mb", async () => {
      const response = await supertest(app)
        .patch("/v1/users/key/6521f450712bddd953596452")
        .field({ name: "Nova" })
        .attach(
          "image",
          "./src/app/v1/products/controllers/tests/assests/img/5mb.jpg"
        );
      expect(response.status).toBe(422);
    });
    test("should be return 422 status code if the request files is more than one", async () => {
      const response = await supertest(app)
        .patch("/v1/users/key/6521f450712bddd953596452")
        .field({ name: "Nova" })
        .attach("image", "./public/img/books/poster/1.jpg")
        .attach("image", "./public/img/books/poster/2.jpg");
      expect(response.status).toBe(422);
    });
  });
});
