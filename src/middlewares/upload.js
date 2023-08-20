import multer from "multer";
import { v4 as uuid } from "uuid";

const storage = multer.diskStorage({
  destination: "tmp/",
  filename: (req, file, cb) => {
    const name =
      uuid() +
      "-" +
      Date.now() +
      "-" +
      file.fieldname +
      "-" +
      file.originalname;

    cb(null, name);
  },
});

const upload = multer({ storage });

export default upload;
