/**
 * User.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    nome: {
      type: 'string',
      required: true
    },
    senha: {
      type: 'string',
      required: true,
    },
    email: {
      type: 'string',
      required: true,
    },
    estado: {
      type: 'string',
      required: true,
    },
  },

};

