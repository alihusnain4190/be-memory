process.env.NODE_ENV = "test";

const app = require("../app");
const request = require("supertest");
const connection = require("../db/connection");
const { as } = require("../db/connection");

beforeEach(() => {
  return connection.seed.run();
});

afterAll(() => {
  return connection.destroy();
});
describe("/", () => {
  describe("/api/f_imgs", () => {
    describe("/api/f_imgs", () => {
      it("Invalid method", async () => {
        const invalidMethod = ["put"];
        const methodPromise = invalidMethod.map((methods) => {
          return request(app)
            [methods]("/api/f_imgs")
            .expect(405)
            .then((res) => {
              expect(res.body.msg).toBe("Method Not Allowed");
            });
        });
        return Promise.all(methodPromise);
      });

      it("status 404 Route not found", async () => {
        const { body } = await request(app).get("/api/ali").expect(404);
        expect(body.msg).toBe("Route Not Found");
      });
      it("status 200 with response of all faimily images and data in array", () => {
        return request(app)
          .get("/api/f_imgs")
          .expect(200)
          .then(({ body: { f_img } }) => {
            expect(Array.isArray(f_img)).toBe(true);
          });
      });
      it("status 200 with response of of array of length", async () => {
        const {
          body: { f_img },
        } = await request(app).get("/api/f_imgs").expect(200);

        expect(f_img).toHaveLength(10);
      });
      it("status 200 with respo of array keys", async () => {
        const {
          body: { f_img },
        } = await request(app).get("/api/f_imgs").expect(200);
        expect(Object.keys(f_img[0])).toEqual([
          "id",
          "img_sml",
          "img_full",
          "description",
          "created_at",
        ]);
      });
      it("status 200 response with array of family images in asc order according to time", async () => {
        const {
          body: { f_img },
        } = await await request(app).get("/api/f_imgs").expect(200);
        expect(f_img).toBeSorted();
      });
      it("status 200 response with array of family images in desc order according to time", async () => {
        const {
          body: { f_img },
        } = await request(app).get("/api/f_imgs?order=desc").expect(200);

        expect(f_img).toBeSorted({ descending: true });
      });
      it("status 200 response with array of family images in desc order according to imgage", async () => {
        const {
          body: { f_img },
        } = await request(app).get("/api/f_imgs?sort_by=img_sml").expect(200);

        expect(f_img).toBeSorted({ descending: true });
      });
      it("GET status:400, when passed an invalid sort_by query", async () => {
        const { body } = await request(app)
          .get("/api/f_imgs?order=ali")
          .expect(400);
        expect(body.msg).toBe("Bad Request: Invalid order query");
      });
      it("GET status:400, when passed an invalid sort_by query", async () => {
        const { body } = await request(app)
          .get("/api/f_imgs?sort_by=ali")
          .expect(400);
        expect(body.msg).toBe("Bad Request");
      });
      it("Invalid method with status 405", async () => {
        const { body } = await request(app).put("/api/f_imgs").expect(405);
        console.log(body);
        expect(body.msg).toBe("Method Not Allowed");
      });
    });
    describe("POST images", () => {
      describe("/api/f_imgs", () => {
        it("Status 201 with response of object", async () => {
          const input = {
            img_sml: "http://placeimg.com/640/480/nightlife",
            img_full: "http://placeimg.com/640/480/nightlife",
            description: "alihusnain",
          };
          const {
            body: { f_img },
          } = await request(app).post("/api/f_imgs").send(input).expect(201);
          expect(typeof f_img).toBe("object");
        });
        it("Status 201 with response of object which have keys", async () => {
          const input = {
            img_sml: "http://placeimg.com/640/480/nightlife",
            img_full: "http://placeimg.com/640/480/nightlife",
            description: "alihusnain",
          };
          const {
            body: { f_img },
          } = await request(app).post("/api/f_imgs").send(input).expect(201);
          expect(Object.keys(f_img)).toEqual([
            "id",
            "img_sml",
            "img_full",
            "description",
            "created_at",
          ]);
        });
        it("Status 400 when post data with incomplete property", async () => {
          const input = {
            img_sml: "http://placeimg.com/640/480/nightlife",
            img_full: "http://placeimg.com/640/480/nightlife",
            descriptions: "alihusnain",
          };
          const { body } = await request(app)
            .post("/api/f_imgs")
            .send(input)
            .expect(400);
          expect(body.msg).toBe("Bad Request");
        });
        it("Status 404 when post empty object", async () => {
          const { body } = await request(app)
            .post("/api/f_imgs")
            .send({})
            .expect(404);
          expect(body.msg).toBe("nothing is sending");
        });
        it("Status 400 if someone post family Images without description", async () => {
          const input = {
            img_sml: "http://placeimg.com/640/480/nightlife",
            img_full: "http://placeimg.com/640/480/nightlife",
            descriptions: "",
          };
          const { body } = await request(app)
            .post("/api/f_imgs")
            .send(input)
            .expect(400);
          expect(body.msg).toBe("Bad Request");
        });
      });
    });
    describe("/api/f_imgs:id", () => {
      it("Status 200 with response of object by id", async () => {
        const {
          body: { f_img },
        } = await request(app).get("/api/f_imgs/1").expect(200);

        expect(typeof f_img).toBe("object");
      });
      it("Status 200 with reponse of object containing Keys", async () => {
        const {
          body: { f_img },
        } = await request(app).get("/api/f_imgs/1").expect(200);
        expect(Object.keys(f_img)).toEqual([
          "id",
          "img_sml",
          "img_full",
          "description",
          "created_at",
        ]);
      });
      it("Status 200 with response of object and check id ", async () => {
        const {
          body: { f_img },
        } = await request(app).get("/api/f_imgs/1").expect(200);
        expect(f_img.id).toBe(1);
      });
      it("Status 400 if pass non valid id", async () => {
        const { body } = await request(app).get("/api/f_imgs/ali").expect(400);
        expect(body.msg).toBe("Bad Request");
      });
      it("Status 404 if id is not exist ", async () => {
        const { body } = await request(app).get("/api/f_imgs/100").expect(404);
        expect(body.msg).toBe("Id Not Exist");
      });
      it("Invlaid Method with status 405", async () => {
        const { body } = await request(app).put("/api/f_imgs/1").expect(405);
        expect(body.msg).toBe("Method Not Allowed");
      });
    });
    describe("DELETE Images BY ID", () => {
      describe("/api/f_imgs", () => {
        it("Status 204", async () => {
          const { body } = await request(app)
            .delete("/api/f_imgs/1")
            .expect(204);
        });
        it("Status 404 when enter wrong id type", async () => {
          const { body } = await request(app)
            .delete("/api/f_imgs/1000")
            .expect(404);
          expect(body.msg).toBe("Id Not Exist");
        });
        it("Status 400 when enter wrong id type", async () => {
          const { body } = await request(app)
            .delete("/api/f_imgs/ali")
            .expect(400);
          expect(body.msg).toBe("Bad Request");
        });
      });
    });
    describe("PATH Family images by id", () => {
      describe("/api/f_imgs", () => {
        it.only("Status 201 reposnse with updated object", async () => {
          const input = {
            description: "alihusnain",
          };
          const {
            body: { f_img },
          } = await request(app).patch("/api/f_imgs/1").send(input).expect(201);
          expect(typeof f_img).toBe("object");

          expect(f_img.description).toBe("alihusnain");
        });
      });
    });
  });
});
