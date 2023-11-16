import cInput from './cInput.vue'
import store from '../store'

export default {
  name: 'CInput',

  components: {
    cInput
  },

  render(h, section, children) {
    const _this = this
    // 传递参数
    const _propsOn = {
      nativeOn: {
        click: e => {
          e.stopPropagation()
          _this.$emit('pickType', 'cInput')
        }
      }
    }

    return (
      <cInput
        {..._propsOn}
      ></cInput>
    )
  }
}
