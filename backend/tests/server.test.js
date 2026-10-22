const request = require("supertest");
const app = require("../server");

describe("API Ma Garderie", () => {
  test("GET /api/health retourne OK", async () => {
    const response = await request(app).get("/api/health");

    expect(response.status).toBe(200);
    expect(response.body.status).toBe("ok");
  });

  test("GET /api/garderie retourne les informations", async () => {
    const response = await request(app).get("/api/garderie");

    expect(response.status).toBe(200);
    expect(response.body.nom).toBe("Ma Garderie");
  });

  test("GET /api/services retourne une liste", async () => {
    const response = await request(app).get("/api/services");

    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body.length).toBeGreaterThan(0);
  });

  test("GET /api/activites retourne une liste", async () => {
    const response = await request(app).get("/api/activites");

    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body.length).toBeGreaterThan(0);
  });
});
