async function factory (pkgName) {
  const me = this

  class WaibuPhosphor extends this.lib.Plugin {
    static alias = 'wpp'
    static dependencies = ['waibu-mpa']

    constructor () {
      super(pkgName, me.app)
      this.config = {
        waibu: {
          prefix: 'phosphor'
        }
      }
    }
  }

  return WaibuPhosphor
}

export default factory
