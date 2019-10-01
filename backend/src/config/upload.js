const multer = require('multer');
const path = require('path');

module.exports = {
    storage: multer.diskStorage({
        /* path usado para achar a pasta em qualquer sistema, uma vírgula é a barra ! ex: ../../ */
        destination: path.resolve(__dirname, '..', '..', 'uploads'),
        filename: (req, file, cb) => {
            const ext = path.extname(file.originalname);
            /* Basename retorna o nome sem extensão, ext é a extensao */
            const name = path.basename(file.originalname, ext);

            /* Nome com a data postada, não terá nomes iguais (provavelmente) */
            cb(null, `${name}-${Date.now()}${ext}`);
        },
    })
}