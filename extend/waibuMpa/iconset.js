import phosphor from './iconset/phosphor.js'
import phosphorDuotone from './iconset/phosphor-duotone.js'
import phosphorFill from './iconset/phosphor-fill.js'

async function iconset () {
  return [
    phosphor.call(this),
    phosphorFill.call(this),
    phosphorDuotone.call(this)
  ]
}

export default iconset
