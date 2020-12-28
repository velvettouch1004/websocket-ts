import {ConstantBackoff} from "../../src";

describe("Testsuite for ConstantBackoff", () => {
    test("ConstantBackoff should always return the same value 0", () => {
        const sut = new ConstantBackoff(0);
        for (let i = 0; i < 10; i++)
            expect(sut.Next()).toBe(0);
        sut.Reset();
        for (let i = 0; i < 10; i++)
            expect(sut.Next()).toBe(0);
    });

    test("ConstantBackoff should always return the same value 1000", () => {
        const sut = new ConstantBackoff(1000);
        for (let i = 0; i < 10; i++)
            expect(sut.Next()).toBe(1000);
        sut.Reset();
        for (let i = 0; i < 10; i++)
            expect(sut.Next()).toBe(1000);
    });
})
