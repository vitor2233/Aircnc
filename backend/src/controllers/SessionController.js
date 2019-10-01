const User = require('../models/User');

module.exports = {
  async store(req, res) {
    const { email } = req.body;

    let user = await User.findOne({ email });

    //Se não achar um usuário com o email do body então irá cadastrar o novo
    if(!user){
        user = await User.create({ email });
    }

    return res.json(user);
  }
};