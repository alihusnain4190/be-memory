process.env.NODE_ENV = "test";

const app = require("../app");
const request = require("supertest");
const connection = require("../db/connection");

beforeEach(() => {
  return connection.seed.run();
});

afterAll(() => {
  return connection.destroy();
});
describe("/", () => {
  describe("/api", () => {
    describe("/api/f_imgs", () => {
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
        "created_at"
      ]);
    });
  });
});
