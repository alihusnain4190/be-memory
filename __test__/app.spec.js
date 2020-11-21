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
  describe("/api", () => {
    describe("/api/f_imgs", () => {
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
  });
});
