import path from "path";
import express from "express";
import bodyParser from "body-parser";
import * as apiInjectors from "./api";

const app = express();
const port = 3250;

app.use(express.static("../frontend/dist"));
app.use(bodyParser.json({ limit: "50mb" }));

for (const injector in apiInjectors) {
  const injectEndpoints = apiInjectors[injector];
  injectEndpoints(app);
}

app.get("*", function (request, response) {
  response.sendFile(path.resolve("../frontend/dist", "index.html"));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
