<template>
  <el-table
   @dragover.prevent @drop.stop="handleDrop"
    :data="tableData">
    <el-table-column
      prop="data"
      label="日期"
      width="180">
    </el-table-column>
    <el-table-column
      prop="class"
      label="班级"
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址">
    </el-table-column>
  </el-table>
</template>

<script>
// 默认输入组件
export default {
  name: 'cTable',
  props: {
    jsonSchema: {
      type: Object,
      default: function () {
        return {}
      }
    }
  },
  data () {
    return {
      tableData: [{
        date: '2022-07-03',
        class: 'zhaowa',
        address: 'BJC'
      }, {
        date: '2022-07-03',
        class: 'zhaowa',
        address: 'BJC'
      }, {
        date: '2022-07-03',
        class: 'zhaowa',
        address: 'BJC'
      }, {
        date: '2022-07-03',
        class: 'zhaowa',
        address: 'BJC'
      }, {
        date: '2022-07-03',
        class: 'zhaowa',
        address: 'BJC'
      }]
    }
  },
  methods: {
    handleDrop(e) {
      this.$emit('drop', e, this)
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.$emit('viewMounted', this)
    })
  }
}
</script>
<style  scoped>
.el-table{
   width: 100%;
   display: inline-block;
    height: 300px;
    background-color: #fff;
}
</style>