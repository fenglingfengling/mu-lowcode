import cTag from './cTag'

export default {
  name: 'cTag',

  components: {
    cTag
  },

  render(h, section, children) {
    const _this = this
    const _propsOn = {
      nativeOn: {
        click: e => {
          e.stopPropagation();
          _this.$emit('pickType', 'cTag')
        }
      }
    }

    return (
      <cTag
        {..._propsOn}
      > {children} </cTag>
    )
  }
}


