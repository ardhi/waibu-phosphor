import mapping from './_mapping.js'

function phosphor () {
  const { cloneDeep } = this.app.lib._
  return {
    name: 'phosphor',
    css: 'waibuPhosphor.virtual:/phosphor/regular/style.css',
    prefix: 'ph ph-',
    mapping: cloneDeep(mapping)
  }
}

export default phosphor
