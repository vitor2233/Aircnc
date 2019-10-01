const Spot = require('../models/Spot');

module.exports = {
    async show(req, res) {
        const { user_id } = req.headers;

        /* Mostrar os spots do usuário logado */
        const spots = await Spot.find({ user: user_id});

        return res.json(spots);
    }
}