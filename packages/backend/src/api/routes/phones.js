import PhoneController from "../../controllers/PhoneController";

function injectPhonesEndpoints(app) {
  app.get("/phones", (req, res) => {
    const data = PhoneController.findAll();
    res.json(data);
  });

  app.get("/phone/:id", (req, res) => {
    const id = req.params.id
    const data = PhoneController.findById(id);
    res.json(data);
  });
}

export default injectPhonesEndpoints;
