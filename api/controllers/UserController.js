module.exports = {
  async find(req, res) {
    try {
      const users = await User.find();
      return res.json(users);
    } catch (err) {
      return res.serverError(err); // Lidar com erros de servidor
    }
  },

  async findOne(req, res) {
    try {
      const user = await User.findOne(req.params.id);
      if (!user) {
        return res.notFound(); // Retornar 404 se não encontrado
      }
      return res.json(user);
    } catch (err) {
      return res.serverError(err);
    }
  },

  //As informações como e-mail, senha, nome, data etc são confirmadas/verificadas DURANTE A CRIAÇÃO, e apenas du
  async create(req, res) {
    try {
      //const user = await User.create(req.body);
      const user = await User.create({
        nome: await sails.helpers.formatname(req.body.nome),
        email: await sails.helpers.formatemail(req.body.email),
        senha: req.body.senha,
      });
      return res.status(201).json(user); // Retornar 201 Created
    } catch (err) {
      if (err.name === "ValidationError") {
        return res.badRequest(err); // Lidar com erros de validação
      }
      return res.serverError(err);
    }
  },

  async update(req, res) {
    try {
      const user = await User.updateOne(req.params.id, req.body);
      if (!user) {
        return res.notFound();
      }
      return res.json(user);
    } catch (err) {
      if (err.name === "ValidationError") {
        return res.badRequest(err);
      }
      return res.serverError(err);
    }
  },

  async destroy(req, res) {
    try {
      const user = await User.destroyOne(req.params.id);
      if (!user) {
        return res.notFound();
      }
      return res.ok(); // Retornar 200 OK
    } catch (err) {
      return res.serverError(err);
    }
  },
};
