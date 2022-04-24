import { pick } from "lodash";
import db from "../db";

class PhoneController {
  static findAll() {
    const listAttrs = ["id", "name", "description", "imageFileName", "price"];

    return db.phones.map((phone) => pick(phone, listAttrs));
  }

  static findById(id) {
    return db.phones.find((phone) => phone.id == id);
  }
}

export default PhoneController;
