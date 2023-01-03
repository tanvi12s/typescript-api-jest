import request from "supertest";

import app from '../../src/app';

describe("user routes", () => {
    test("Get all users", async() => {
        const res = await request(app).get('/users');
        expect(res.body).toEqual(['A','B','C']);
    });
});