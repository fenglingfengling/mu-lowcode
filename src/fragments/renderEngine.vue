<script>
import { components, parsers } from '../components/index'
export default {
    name: 'renderEngine',
    props: {
        // 配置协议
        jsonSchema: {
            type: Object,
            default: () => {
                return {}
            }
        },
        addNode: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            page: undefined
        }
    },
    methods: {
        // 根节点渲染
        renderRoot(h) {
            let _page = this.page

            // 后期被拓展 => 全局配置信息
            return (
                <div class="root">
                    {
                        this.renderComponents(h, _page)
                    }
                </div>
            )
        },
        // 组件渲染
        renderComponents(h, section) {
            let _children = null
            
            if (section.children) {
                // 布局组件
                _children = this.renderChildren(h, section)
                console.log('_children: ', _children)
            }
            return this.startRender(h, section, _children)
        },
        // 子组件拆分
        renderChildren(h, section) {
            let _nodeArray = section.children || [].concat(section)

            // 在此拓展兄弟节点之间的逻辑
            return _nodeArray.map((n, i) => this.renderComponents(h, n, i))
        },
        // 渲染单个组件
        startRender(h, section, _children) {
            const _type = section.type
            const renderMod = parsers[_type]

            if (renderMod) {
                return renderMod.render.call(this, h, section, _children)
            }
            // 加载失败组件去兜底
            return null
        },
        init() {
            this.page = this.jsonSchema.page || {}
        },
        // 添加部分
        handleDrop(event, vm) {
            const _json = vm.jsonSchema

            if (_json && _json.type === 'Container') {
                if (!_json.children) {
                    this.$set(_json, 'children', [])
                }

                _json.children.push({
                    type: this.addNode
                })
            }
        },
        // 预留悬停逻辑化处理
        handleDragOver() {}
    },
    created() {
        this.init()
    },
    components: {
        ...components,
        ...parsers
    },
    render(h) {
        // 拓展启动前参数
        return this.renderRoot(h)
    }
}
</script>