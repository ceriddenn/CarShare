"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const hello_controller_1 = require("./hello.controller");
describe('HelloController', () => {
    let controller;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            controllers: [hello_controller_1.HelloController],
        }).compile();
        controller = module.get(hello_controller_1.HelloController);
    });
    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
//# sourceMappingURL=hello.controller.spec.js.map