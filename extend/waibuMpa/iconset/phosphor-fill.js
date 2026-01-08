import mapping from './_mapping.js'

function phosphorFill (ctx) {
  const { cloneDeep } = this.app.lib._
  return {
    name: 'phosphor-fill',
    css: 'waibuPhosphor.virtual:/phosphor/fill/style.css',
    prefix: 'ph-fill ph-',
    mapping: cloneDeep(mapping)
  }
}

export default phosphorFill
