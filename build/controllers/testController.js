"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TestController {
    list(req, res) {
        res.json('test routes ok');
    }
    create(req, res) {
        console.log(req.body);
    }
}
exports.testController = new TestController();
