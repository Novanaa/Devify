import supertest from "supertest";
import app from "../../../../../app.js";

describe("Products - PATCH", () => {
  //* Update product data by id
  test("/products - should be return 200 status code", async () => {
    const response = await supertest(app)
      .patch("/products/1")
      .field({ title: "update dari superagent" });
    expect(response.status).toBe(200);
  });
  test("/products - should be return 200 status code", async () => {
    const response = await supertest(app)
      .patch("/products/2")
      .field({ title: "update dari superagent", category: "Jewelry" });
    expect(response.status).toBe(200);
  });
  test("/products - should be return 200 status code", async () => {
    const response = await supertest(app).patch("/products/4").field({
      title: "update dari superagent",
      image: "test",
    });
    expect(response.status).toBe(200);
  });
  test("/products - should be return 200 status code", async () => {
    const response = await supertest(app)
      .patch("/products/3")
      .field({
        title: "update dari superagent",
        category: "Jewelry",
      })
      .attach("image", "./public/img/books/poster/1.jpg");
    expect(response.status).toBe(200);
  });
  test("/products - should be return 422 status code if the request file is more multiple files", async () => {
    const response = await supertest(app)
      .patch("/products/3")
      .field({
        title: "update dari superagent",
        category: "Jewelry",
      })
      .attach("image", "./public/img/books/poster/1.jpg")
      .attach("image", "./public/img/books/poster/2.jpg");
    expect(response.status).toBe(422);
  });
  test("/products - should be return 422 status code if the request params is not numberic", async () => {
    const response = await supertest(app).patch(
      "/products/dfkgjuhkfdhgkshdfgshglsd"
    );
    expect(response.status).toBe(422);
  });
  test("/products - should be return 422 status code if the request body category is not valid", async () => {
    const response = await supertest(app)
      .patch("/products/2")
      .field({ category: "hsgdfgadgfd" })
      .attach("image", "./public/img/books/poster/2.jpg");
    expect(response.status).toBe(422);
  });
  test("/products - should be return 404 status code if the product data is not found", async () => {
    const response = await supertest(app).patch("/products/404");
    expect(response.status).toBe(404);
  });
  test("/products - should be return 422 status code if the request file extension is not supported", async () => {
    const response = await supertest(app)
      .patch("/products/3")
      .field({
        title: "update dari superagent",
        category: "Jewelry",
      })
      .attach(
        "image",
        "./src/app/v1/products/controllers/tests/assests/img/icoimage.ico"
      );
    expect(response.status).toBe(422);
  });
  test("/products - should be return 422 status code if the request file size is more than 5mb", async () => {
    const response = await supertest(app)
      .patch("/products/3")
      .field({
        title: "update dari superagent",
        category: "Jewelry",
      })
      .attach(
        "image",
        "./src/app/v1/products/controllers/tests/assests/img/5mb.jpg"
      );
    expect(response.status).toBe(422);
  });
  //* Update product data by uniquekey
  test("/products - should be return 200 status code", async () => {
    const response = await supertest(app)
      .patch("/products/key/65096f350eb433abc468c855")
      .field({ title: "update dari superagent" });
    expect(response.status).toBe(200);
  });
  test("/products - should be return 200 status code", async () => {
    const response = await supertest(app)
      .patch("/products/key/65096f8a0eb433abc468c857")
      .field({ title: "update dari superagent", category: "Men's" });
    expect(response.status).toBe(200);
  });
  test("/products - should be return 200 status code", async () => {
    const response = await supertest(app)
      .patch("/products/key/65096fad0eb433abc468c85b")
      .field({
        title: "update dari superagent",
        image: "test lagi",
      });
    expect(response.status).toBe(200);
  });
  test("/products - should be return 200 status code", async () => {
    const response = await supertest(app)
      .patch("/products/key/65096f970eb433abc468c859")
      .field({
        title: "update dari superagent",
        category: "Women's",
      })
      .attach("image", "./public/img/books/poster/1.jpg");
    expect(response.status).toBe(200);
  });
  test("/products - should be return 422 status code if the request file is more multiple files", async () => {
    const response = await supertest(app)
      .patch("/products/key/65096f970eb433abc468c859")
      .field({
        title: "update dari superagent",
        category: "Jewelry",
      })
      .attach("image", "./public/img/books/poster/1.jpg")
      .attach("image", "./public/img/books/poster/2.jpg");
    expect(response.status).toBe(422);
  });
  test("/products - should be return 422 status code if the request params is not MongoDBId", async () => {
    const response = await supertest(app).patch(
      "/products/key/dfkgjuhkfdhgkshdfgshglsd"
    );
    expect(response.status).toBe(422);
  });
  test("/products - should be return 422 status code if the request body category is not valid", async () => {
    const response = await supertest(app)
      .patch("/products/key/65096f970eb433abc468c859")
      .field({ category: "hsgdfgadgfd" })
      .attach("image", "./public/img/books/poster/2.jpg");
    expect(response.status).toBe(422);
  });
  test("/products - should be return 404 status code if the product data is not found", async () => {
    const response = await supertest(app).patch(
      "/products/key/65096f970ebs33abc468c859"
    );
    expect(response.status).toBe(404);
  });
  test("/products - should be return 422 status code if the request file extension is not supported", async () => {
    const response = await supertest(app)
      .patch("/products/key/65096f970eb433abc468c859")
      .field({
        title: "update dari superagent",
        category: "Jewelry",
      })
      .attach(
        "image",
        "./src/app/v1/products/controllers/tests/assests/img/icoimage.ico"
      );
    expect(response.status).toBe(422);
  });
  test("/products - should be return 422 status code if the request file size is more than 5mb", async () => {
    const response = await supertest(app)
      .patch("/products/key/65096f970eb433abc468c859")
      .field({
        title: "update dari superagent",
        category: "Jewelry",
      })
      .attach(
        "image",
        "./src/app/v1/products/controllers/tests/assests/img/5mb.jpg"
      );
    expect(response.status).toBe(422);
  });
});
