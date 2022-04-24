"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _lodash = require("lodash");

var _db = _interopRequireDefault(require("../db"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class PhoneController {
  static findAll() {
    const listAttrs = ["id", "name", "description", "imageFileName", "price"];
    return _db.default.phones.map(phone => (0, _lodash.pick)(phone, listAttrs));
  }

  static findById(id) {
    const foundPhone = _db.default.phones.find(phone => phone.id == id);

    if (!foundPhone) throw Error(`No phone found wit id: ${id}`);
    return foundPhone;
  }

}

var _default = PhoneController;
exports.default = _default;