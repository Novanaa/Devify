import supertest from "supertest";
import app from "../../../../../app.js";

describe("POST - /users", () => {
  test("/users - should be return 201 status code", async () => {
    const response = await supertest(app).post("/users").field({
      name: "kldfnglkdf",
      email: "example@gmail.com",
      password: "test dulu gasi???",
      picture: "hehehe",
    });
    expect(response.status).toBe(201);
  });
  test("/users - should be return 201 status code", async () => {
    const response = await supertest(app).post("/users").field({
      name: "dnfglkdf",
      email: "example@gmail.com",
      password: "test dulu gasi???",
      image: "hehehe",
    });
    expect(response.status).toBe(201);
  });
  test("/users - should be return 201 status code", async () => {
    const response = await supertest(app)
      .post("/users")
      .field({
        name: "ksnbfgkjbsf",
        email: "example@gmail.com",
        password: "hehe ini password",
      })
      .attach("image", "./public/img/books/poster/1.jpg");
    expect(response.status).toBe(201);
  });
  test("/users - request body success should be true", async () => {
    const response = await supertest(app)
      .post("/users")
      .field({
        name: "jksbfgkjf",
        email: "heheh@gmail.com",
        password: "hehehe ini adalah passowrd",
      })
      .attach("image", "./public/img/books/poster/1.jpg");
    expect(response.body.success).toBe(true);
  });
  test("/users - should be return 422 status code if the request files and request body image is undefined", async () => {
    const response = await supertest(app)
      .post("/users")
      .field({ name: "klshfgoisfd" });
    expect(response.status).toBe(422);
  });
  test("/users - should be return 422 status code if the request files is more than two", async () => {
    const response = await supertest(app)
      .post("/users")
      .field({ name: "lksnfgkjdf" })
      .attach("image", "./public/img/books/poster/1.jpg")
      .attach("image", "./public/img/books/poster/2.jpg");
    expect(response.status).toBe(422);
  });
  test("/users - should be return 422 status code if request files extension is not supported", async () => {
    const response = await supertest(app)
      .post("/users")
      .field({ name: ";ldfjbiodf" })
      .attach(
        "image",
        "./src/app/v1/users/controllers/tests/assests/img/icoimage.ico"
      );
    expect(response.status).toBe(422);
  });
  test("/users - should be return 422 status code if request files size is more than 5mb", async () => {
    const response = await supertest(app)
      .post("/users")
      .field({ name: "ldfjgbkjdf" })
      .attach(
        "image",
        "./src/app/v1/users/controllers/tests/assests/img/5mb.jpg"
      );
    expect(response.status).toBe(422);
  });
});
