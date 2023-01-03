import request from 'supertest';

import app from '../src/app';

describe("Test app.ts", () => {
    test("Testing routes",async () => {
        const res = await request(app).get('/');
        expect(res.body).toEqual({message: "Hello"});
    });
});