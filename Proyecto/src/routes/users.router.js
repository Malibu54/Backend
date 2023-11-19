import { Router } from "express";
import { uploader } from "../utils";

const router = Router();

router.post("/", uploader.single("file"), (req, res) => {
  if (!req.file) {
    return res
      .status(400)
      .send({ status: "error", error: "No se pudo guardar la imagen" });
  }
  console.log(req.file);

  let user = req.body;
  user.profile = req.file.path;
  user.push(user);
  res.send({ status: "success", message: "User created" });
});

export default router;
