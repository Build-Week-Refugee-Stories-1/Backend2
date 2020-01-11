const request = require("supertest");

const server = require("./server");


describe("POST api/login", () => {

    it("should return a 200 OK Status", () => {
      return request(server)
      .post("/api/login")
      .send({username: "testuser", password: "pass"})
      .then(res => {
        expect(res.status).toBe(200)
      })
    })

    it("should be authenticated.", () => {
      return request(server)
        .post("/api/login")
        .send({ username: "nick", password: "1003" })
        .then(res => {
          const token = res.body.token;

          return request(server)
            .get("/api/stories")
            .set("Authorization", token)
            .then(res => {
              expect(res.status).toBe(200);
              expect(Array.isArray(res.body)).toBe(true);
            });
        });
    });
  })
  

describe("DELETE /stories", () => {
    it("should return a 200 status when deleting a ticket.", () => {
      return request(server)
      .post("/api/login")
      .send({username: "nick", password: "1003"})
      .then(res => {
        const token = res.body.token

        return request(server)
        .delete(`/stories/${createdStoriesId}`)
        .set("Authorization", token)
        .then(res => {
          expect(res.status).toBe(200)
        })
      })
    })
});