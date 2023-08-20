import { config } from "dotenv";
import express from "express";
import cors from "cors";
import throwError from "./src/helpers/throwError.js";
import ctrlWrapper from "./src/middlewares/ctrlWrapper.js";
import validate from "./src/middlewares/validate.js";
import { SuppliersFormResult } from "./src/schemas/suppliers.js";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import upload from "./src/middlewares/upload.js";
import notionService from "./src/services/notion.js";
import getSupplierData from "./src/helpers/getSupplierData.js";
import morgan from "morgan";

config();

const app = express();

app.use(cors());

app.use(express.json());

app.use(morgan("combined"));

app.post(
  "/suppliers",
  upload.fields([{ name: "certificates" }, { name: "prices" }]),
  validate(SuppliersFormResult),
  ctrlWrapper(async (req, res) => {
    if (!req.files.certificates) throwError("Certificates are required", 400);
    if (!req.files.prices) throwError("Prices are required", 400);

    const data = { ...req.body, ...req.files };

    const dataToInsert = getSupplierData(data);

    await notionService.addToDb(process.env.SUPPLIERS_DB, dataToInsert);

    res.json({ success: true });
  })
);

app.use((err, req, res, next) => {
  console.error("Error happened:", {
    success: false,
    message: err.message || "Unknown error",
    code: [500, 400, 401, 403, 409].includes(err.code) ? err.code : 500,
    stack: err.stack,
  });

  res
    .status([500, 400, 401, 403, 409].includes(err.code) ? err.code : 500)
    .json({
      success: false,
      message: err.message || "Unknown error",
      code: [500, 400, 401, 403, 409].includes(err.code) ? err.code : 500,
    });
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  const dir = __dirname + "/tmp";

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }

  console.log(`App is running on port ${port}`);
});
