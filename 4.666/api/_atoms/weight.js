const CONFIG = require('./../_config/atoms')(__filename)
const DEFAULT = {
  ATOM_NAME: CONFIG.ATOM_NAME,
  VALIDATE: false
}
const PROPS = {
  type: Number,
  default: 1
}

const atomConfig = Object.assign({}, DEFAULT, PROPS)

module.exports = require('./../_factories/atom')(atomConfig)

