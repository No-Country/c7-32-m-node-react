import multer from "multer";
import path from "path";

export default multer({
  storage: multer.diskStorage({}),
  fileFilter: (req, file, cb) => {
    let ext = path.extname(file.originalname);

    if (ext !== ".jpg" && ext !== ".jpeg" && ext !== ".png") {
      cb(
        new Error(
          "El formato de archivo para la imagen no esta soportado, tiene que subir una imagen con extension jpg, jpeg o png"
        ),
        false
      );
      return;
    }

    cb(null, true);
  }
});
