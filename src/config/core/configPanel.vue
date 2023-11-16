<template>
    <div class="config-panel">
        <template v-if="editorJson">
            <!-- 渲染微内核模块 -->
            <config-module v-for="(modJson, name) in editorJson" ref="module" :key="name"
                :modJson="modJson"
                :value="currentValue"
            ></config-module>
        </template>
    </div>
</template>

<script>
// 配置文件
import json from '../json'
import configModule from './configModule.vue'

let components = json.configs

function getJson(type) {
    let component = components[type] || {}
    let panelConfig = component.panelCore || {}
    let _json = panelConfig.model || {}

    return _json
}

export default {
    props: {
        currentPickType: {
            type: String,
            default: 'cButton'
        },
        value: {
            type: Object,
            default: function() {
                return {}
            }
        }
    },
    components: {
        configModule
    },
    data() {
        let _json = getJson(this.currentPickType)
        let defaultValue = _json.default
        let currentValue = this.value
    
        if (!currentValue || Object.keys(currentValue).length === 0) {
            currentValue = defaultValue
        }

        return {
            currentValue: currentValue,
            editorJson: _json,
            store: {}
        }
    },
    watch: {
        currentPickType() {
            let _json = getJson(this.currentPickType)

            this.editorJson = _json
        }
    },
    methods: {
        getValue() {
            return this.currentValue
        }
    }
}
</script>