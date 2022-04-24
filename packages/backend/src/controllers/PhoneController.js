import { pick } from "lodash";
import db from "../db";

class PhoneController {
  static findAll() {
    const listAttrs = ["id", "name", "description", "imageFileName", "price"];

    return db.phones.map((phone) => pick(phone, listAttrs));
  }

  static findById(id) {
    const foundPhone = db.phones.find((phone) => phone.id == id);
    if (!foundPhone) throw Error(`No phone found wit id: ${id}`);
    return foundPhone;
  }
}

export default PhoneController;
