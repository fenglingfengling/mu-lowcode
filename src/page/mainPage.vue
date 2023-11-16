<template>
  <div class="hello">
    <div class="header">
      <div class="header-logo">
        <img src="../assets/logo.jpg" alt="logo">
        <strong>低代码</strong>
      </div>
      <div class="header-btn">
        <span>预览</span>
        <span>保存</span>
      </div>
    </div>
    <div class="main-content">
      <!-- 主区域 -->
      <el-row>
        <el-col :span="4">
          <!-- 物料堆 -->
          <div class="component-stack block">
            <div class="component-title">
              物料堆
            </div>
            <ul>
              <li v-for="(item, index) in stacks" :key="index"
                class="component-item"
                :draggable="true" @drag="handleDrag(item)"
              >
                {{ item }}
              </li>
            </ul>
          </div>
        </el-col>
        <el-col :span="16">
          <!-- 主舞台 -->
          <div class="stage block"
            @dragover.prevent
            >
            <render-engine ref="engine"
              :jsonSchema="currentJson"
              @pickType="handlePickType" :addNode="selectedType"
              ></render-engine>
          </div>
        </el-col>
        <el-col :span="4">
          <!-- 配置面板 -->
          <config-panel
            :currentPickType="currentPickType"
            ></config-panel>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import renderEngine from '../fragments/renderEngine.vue'
// import configPanel from '../fragments/configPanel.vue'
import configPanel from '../config/core/configPanel.vue'

export default {
  name: 'MainPage',
  data () {
    return {
      stacks: ['CButton', 'CInput', 'Container', 'CTable', 'CChart', 'CTag'],
      // 当前操作的数据
      currentJson: {},
      jsonSchema: {
        page: {
          type: 'Container',
          children: [{
            type: 'Container',
            children: [{
              type: 'CInput'
            }, {
              type: 'CButton'
            }]
          }, {
            type: 'CChart'
          }, {
            type: 'Container',
            children: [{
              type: 'CInput'
            }, {
              type: 'CTable'
            }]
          }, {
            type: 'CTag',
            children: [{
              type: 'CInput'
            }, {
              type: 'CTable'
            }]
          }]
        }
      },
      // 物料堆中，当前拾取的类型
      selectedType: '',
      // 舞台中，当前选中的类型
      currentPickType: ''
    }
  },
  components: {
    renderEngine,
    configPanel
  },
  methods: {
    handleDrag(item) {
      this.selectedType = item
    },
    handlePickType(type) {
      this.currentPickType = type
    }
  },
  created () {
    this.currentJson = this.jsonSchema
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .block {
    border: 1px solid var(--lightBg);
    height: 100vh;
  }

  .header {
    text-align: left;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
  }

  .header-logo {
    display: flex;
    align-items: center;
  }

  .header img {
    width: 80px;
    height: 80px;
  }

  /* 物料堆 */
  .component-title {
    padding: 10px;
  }
  .component-item {
    border: 1px solid var(--mainLine);
    margin: 2px 5px;
    padding: 10px 0;
    border-radius: 18px;
  }

</style>
