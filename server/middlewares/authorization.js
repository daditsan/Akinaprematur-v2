const { User } = require('../models')

const authorization = async (req, res, next) => {
    try {
        let user = await User.findByPk(id);
        if (!user) throw { name: "User Not Found" };
  
        if (user.id === id) {
            next()
        } else {
            throw {
                name: "Forbidden"
            }
        }
    } catch (error) {
        next(error);
    }
  }
  
  module.exports = { authorization };