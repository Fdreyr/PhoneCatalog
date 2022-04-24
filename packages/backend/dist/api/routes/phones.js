"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _PhoneController = _interopRequireDefault(require("../../controllers/PhoneController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function injectPhonesEndpoints(app) {
  app.get("/phones", (req, res) => {
    const data = _PhoneController.default.findAll();

    res.json(data);
  });
  app.get("/phone/:id", (req, res) => {
    const id = req.params.id;

    const data = _PhoneController.default.findById(id);

    res.json(data);
  });
}

var _default = injectPhonesEndpoints;
exports.default = _default;