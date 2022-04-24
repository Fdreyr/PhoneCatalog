import "regenerator-runtime/runtime";
import axios from "axios";

async function list() {
  try {
    const response = await axios.get("/phones");
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

async function find(id) {
  try {
    const response = await axios.get(`/phone/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export { list, find };
