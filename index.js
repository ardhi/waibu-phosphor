async function factory (pkgName) {
  const me = this

  return class BajoPhosphor extends this.lib.BajoPlugin {
    constructor () {
      super(pkgName, me.app)
      this.alias = 'wpp'
      this.dependencies = ['waibu-mpa']
      this.config = {
        waibu: {
          prefix: 'phosphor'
        }
      }
    }
  }
}

export default factory
