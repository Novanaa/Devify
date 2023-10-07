import supertest from "supertest";
import app from "../../../../../app.js";

// describe("PATCH /users", () => {
//   describe("PATCH /users/<id>", () => {
//     test("/users/1 - should be return 200 status code", async () => {
//       const response = await supertest(app)
//         .patch("/users/1")
//         .field({ email: "ini update dari supertest hehehhe" })
//         .attach("image", "./public/img/books/poster/2.jpg");
//       expect(response.status).toBe(200);
//     });
//     test("/users/1 - should be return 422 status code if request files extension is not supported", async () => {
//       const response = await supertest(app)
//         .patch("/users/1")
//         .field({ email: "Comsology" })
//         .attach(
//           "image",
//           "./src/app/v1/books/controllers/tests/assests/img/icoimage.ico"
//         );
//       expect(response.status).toBe(422);
//     });
//     test("/users/1 - should be return 422 status code if request files size is more than 5mb", async () => {
//       const response = await supertest(app)
//         .patch("/users/1")
//         .field({ email: "Comsology" })
//         .attach(
//           "image",
//           "./src/app/v1/books/controllers/tests/assests/img/5mb.jpg"
//         );
//       expect(response.status).toBe(422);
//     });
//     test("/users/1 - should be return 422 status code if the request files is more than two", async () => {
//       const response = await supertest(app)
//         .patch("/users/1")
//         .field({ email: "Comsology" })
//         .attach("image", "./public/img/books/poster/1.jpg")
//         .attach("image", "./public/img/books/poster/2.jpg");
//       expect(response.status).toBe(422);
//     });
//     test("/users/test - should be return 422 status code if the request id is not numberic", async () => {
//       const response = await supertest(app)
//         .patch("/users/test")
//         .field({ email: "testsssss" });
//       expect(response.status).toBe(422);
//     });
//     test("/users/1 - should be return 200 status code", async () => {
//       const response = await supertest(app)
//         .patch("/users/1")
//         .field({ email: "ini update dari supertest hehehhe" });
//       expect(response.status).toBe(200);
//     });
//     test("/users/1 - should be return 200 status code", async () => {
//       const response = await supertest(app).patch("/users/1").field({
//         email: "ini update dari supertest hehehhe",
//         picture: "hehehe tests",
//       });
//       expect(response.status).toBe(200);
//     });
//   });
//   describe("PATCH /users/key/<id>", () => {
//     test("/users/key/650e5729574d212a7abadbbb - should be return 200 status code", async () => {
//       const response = await supertest(app)
//         .patch("/users/key/650e5729574d212a7abadbbb")
//         .field({ email: "ini update dari supertest hehehhe" })
//         .attach("image", "./public/img/books/poster/2.jpg");
//       expect(response.status).toBe(200);
//     });
//     test("/users/key/650e5729574d212a7abadbbb - should be return 422 status code if request files extension is not supported", async () => {
//       const response = await supertest(app)
//         .patch("/users/key/650e5729574d212a7abadbbb")
//         .field({ email: "Comsology" })
//         .attach(
//           "image",
//           "./src/app/v1/books/controllers/tests/assests/img/icoimage.ico"
//         );
//       expect(response.status).toBe(422);
//     });
//     test("/users/key/650e5729574d212a7abadbbb - should be return 422 status code if request files size is more than 5mb", async () => {
//       const response = await supertest(app)
//         .patch("/users/key/650e5729574d212a7abadbbb")
//         .field({ email: "Comsology" })
//         .attach(
//           "image",
//           "./src/app/v1/books/controllers/tests/assests/img/5mb.jpg"
//         );
//       expect(response.status).toBe(422);
//     });
//     test("/users/key/650e5729574d212a7abadbbb - should be return 422 status code if the request files is more than two", async () => {
//       const response = await supertest(app)
//         .patch("/users/key/650e5729574d212a7abadbbb")
//         .field({ email: "Comsology" })
//         .attach("image", "./public/img/books/poster/1.jpg")
//         .attach("image", "./public/img/books/poster/2.jpg");
//       expect(response.status).toBe(422);
//     });
//     test("/users/test - should be return 422 status code if the request id is not MongoDBID", async () => {
//       const response = await supertest(app)
//         .patch("/users/test")
//         .field({ email: "testsssss" });
//       expect(response.status).toBe(422);
//     });
//     test("/users/key/650e5729574d212a7abadbbb - should be return 200 status code", async () => {
//       const response = await supertest(app)
//         .patch("/users/key/650e5729574d212a7abadbbb")
//         .field({ email: "ini update dari supertest hehehhe" });
//       expect(response.status).toBe(200);
//     });
//     test("/users/key/650e5729574d212a7abadbbb - should be return 200 status code", async () => {
//       const response = await supertest(app)
//         .patch("/users/key/650e5729574d212a7abadbbb")
//         .field({
//           email: "ini update dari supertest hehehhe",
//           picture: "hehehe tests",
//         });
//       expect(response.status).toBe(200);
//     });
//   });
// });

describe("Users - PATCH", () => {
  describe("/users/:id - PATCH", () => {
    test("should be return 200 status code", async () => {
      const response = await supertest(app).patch("/v1/users/1").field({
        name: "Nva ahaha",
        email: "uhuuys@gmail.com",
        password: "hehehehe",
        image: "hehehe",
      });
      expect(response.status).toBe(200);
    });
    test("should be return 400 status code", async () => {
      const response = await supertest(app).patch("/v1/users/1").field({
        name: "Nva ahaha",
        email: "uhuuys@gmail.com",
      });
      expect(response.status).toBe(400);
    });
    test("should be return 422 status code", async () => {
      const response = await supertest(app).patch("/v1/users/1").field({});
      expect(response.status).toBe(422);
    });
  });
  describe("/users/key/:id - PATCH", () => {
    test("should be return 200 status code", async () => {
      const response = await supertest(app)
        .patch("/v1/users/key/6513dae12baa0763c2d462a4")
        .field({
          name: "Nva ahaha",
          email: "uhuuys@gmail.com",
          password: "hehehehe",
          image: "hehehe",
        });
      expect(response.status).toBe(200);
    });
    test("should be return 400 status code", async () => {
      const response = await supertest(app)
        .patch("/v1/users/key/6513dae12baa0763c2d462a4")
        .field({
          name: "Nva ahaha",
          email: "uhuuys@gmail.com",
        });
      expect(response.status).toBe(400);
    });
    test("should be return 422 status code", async () => {
      const response = await supertest(app)
        .patch("/v1/users/key/6513dae12baa0763c2d462a4")
        .field({});
      expect(response.status).toBe(422);
    });
  });
});
