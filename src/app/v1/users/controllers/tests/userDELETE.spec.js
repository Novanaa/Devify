import supertest from "supertest";
import app from "../../../../../app.js";

describe("DELETE - /users", () => {
  //   describe("DELETE - /users/<id>", () => {
  //     test("/users/1 - should be return 200 status code", async () => {
  //       const response = await supertest(app).delete("/users/4");
  //       expect(response.status).toBe(200);
  //     });
  //     test("/users/2 - should be return 200 status code if the image file was not found", async () => {
  //       const response = await supertest(app).delete("/users/1");
  //       expect(response.status).toBe(200);
  //     });
  //     test("/users/100 - should be return 404 status code if the user data was not found", async () => {
  //       const response = await supertest(app).delete("/users/100");
  //       expect(response.status).toBe(404);
  //     });
  //     test("/users/test - should be return 422 status code if the request params id is not a numberic", async () => {
  //       const response = await supertest(app).delete("/users/test");
  //       expect(response.status).toBe(422);
  //     });
  //   });
  describe("DELETE - /users/key/<id>", () => {
    test("/users/key/650d454c80bb18250962a69f - should be return 200 status code", async () => {
      const response = await supertest(app).delete(
        "/users/key/650d454c80bb18250962a69f"
      );
      expect(response.status).toBe(200);
    });
    test("/users/key/650d455c80bb18250962a6a3 - should be return 200 status code if the image file was not found", async () => {
      const response = await supertest(app).delete(
        "/users/key/650d455c80bb18250962a6a3"
      );
      expect(response.status).toBe(200);
    });
    test("/users/key/test - should be return 422 status code if the request params id is not a MongoDBID", async () => {
      const response = await supertest(app).delete("/users/key/test");
      expect(response.status).toBe(422);
    });
  });
});
