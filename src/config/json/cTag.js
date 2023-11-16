const defaultJson = {
  type: 'cTag',
  disabled: false,
  sections: []
}

const json = {
  key: 'cTag',
  name: 'cTag',
  default() {
    return Object.assign({
      // 个性化加入的
    }, defaultJson)
  },
  panelCore: {
    model: [{
      field: 'disabled',
      title: '是否禁用',
      type: 'el-checkbox'
    }]
  }
}

export default json
