import mapping from './_mapping.js'

function phosphorDuotone (ctx) {
  const { cloneDeep } = this.app.lib._
  return {
    name: 'phosphor-duotone',
    css: 'waibuPhosphor.virtual:/phosphor/duotone/style.css',
    prefix: 'ph-duotone ph-',
    mapping: cloneDeep(mapping)
  }
}

export default phosphorDuotone
