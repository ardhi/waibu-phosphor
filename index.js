/**
 * Plugin factory
 *
 * @param {string} pkgName - NPM package name
 * @returns {class}
 */
async function factory (pkgName) {
  const me = this

  /**
   * WaibuPhosphor class
   *
   * @class
   */
  class WaibuPhosphor extends this.app.baseClass.Base {
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
