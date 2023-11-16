<template>
 <div>
  <el-tag v-for="(item,index) in tags" :key="index" :type="item.type">{{ item.value }}</el-tag>
 </div>
</template>

<script>
// 默认按钮组件
export default {
  name: 'cTag',
  data () {
    return {
      tags: [
        { type: '', value: '标签一' },
        { type: 'success', value: '标签二' },
        { type: 'success', value: '标签三' },
        { type: 'warning', value: '标签四' },
        { type: 'danger', value: '标签五' }
      ]
    }
  }
}
</script>
