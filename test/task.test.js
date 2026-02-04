const request = require("supertest");
const app = require("..");

describe("Tests API /tasks", () => {

  it("GET /tasks devrait renvoyer 200 et un tableau", async () => {
    const res = await request(app).get("/tasks");
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it("POST /tasks devrait créer une tâche", async () => {
    const res = await request(app)
      .post("/tasks")
      .send({ title: "Test via Jest" });

    expect(res.status).toBe(201);
    expect(res.body).toHaveProperty("id");
    expect(res.body.title).toBe("Test via Jest");
  });

});
