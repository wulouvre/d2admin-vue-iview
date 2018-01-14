// [插件] 菜单
export const pluginMenu = {
  title: '插件',
  path: '/demo/plugin',
  name: 'demo-plugin',
  component: resolve => { require(['@/components/core/MainLayout/index.vue'], resolve) },
  // redirect: {
  //   name: 'demo-plugin-marked-readme'
  // },
  children: [
    // markdown 解析库
    {
      title: 'md解析',
      icon: 'quote',
      children: [
        {
          title: 'README',
          icon: 'document-text',
          path: 'marked/readme',
          name: 'demo-plugin-marked-readme',
          component: resolve => { require(['@/pages/demo/plugins/marked/readme.vue'], resolve) }
        },
        {
          title: '基本示例',
          icon: 'document',
          path: 'marked/demo',
          name: 'demo-plugin-marked-demo',
          component: resolve => { require(['@/pages/demo/plugins/marked/demo.vue'], resolve) }
        },
        {
          title: '添加代码高亮',
          icon: 'document',
          path: 'marked/demoHighlight',
          name: 'demo-plugin-marked-demoHighlight',
          component: resolve => { require(['@/pages/demo/plugins/marked/demoHighlight.vue'], resolve) }
        },
        {
          title: 'Markdown组件',
          icon: 'document',
          path: 'marked/markdownComponent',
          name: 'demo-plugin-marked-markdown-component',
          component: resolve => { require(['@/pages/demo/plugins/marked/markdownComponent.vue'], resolve) }
        }
      ]
    },
    // SimpleMDE
    {
      title: 'SimpleMDE',
      icon: 'compose',
      children: [
        {
          title: 'README',
          icon: 'document-text',
          path: 'simpleMDE/readme',
          name: 'demo-plugin-simpleMDE-readme',
          component: resolve => { require(['@/pages/demo/plugins/simpleMDE/readme.vue'], resolve) }
        },
        {
          title: '基本示例',
          icon: 'document',
          path: 'simpleMDE/demo',
          name: 'demo-plugin-simpleMDE-demo',
          component: resolve => { require(['@/pages/demo/plugins/simpleMDE/demo.vue'], resolve) }
        }
      ]
    },
    // 拖拽网格布局组件
    {
      title: '网格布局',
      icon: 'grid',
      children: [
        {
          title: 'README',
          icon: 'document-text',
          path: 'vue-grid-layout/readme',
          name: 'demo-plugin-vue-grid-layout-readme',
          component: resolve => { require(['@/pages/demo/plugins/vue-grid-layout/readme.vue'], resolve) }
        },
        {
          title: '基本示例',
          icon: 'document',
          path: 'vue-grid-layout/demo',
          name: 'demo-plugin-vue-grid-layout-demo',
          component: resolve => { require(['@/pages/demo/plugins/vue-grid-layout/demo.vue'], resolve) }
        }
      ]
    },
    // 可调布局组件
    {
      title: '可调布局',
      icon: 'levels',
      children: [
        {
          title: 'README',
          icon: 'document-text',
          path: 'vue-splitpane/readme',
          name: 'demo-plugin-vue-splitpane-readme',
          component: resolve => { require(['@/pages/demo/plugins/vue-splitpane/readme.vue'], resolve) }
        },
        {
          title: '基本示例',
          icon: 'document',
          path: 'vue-splitpane/demo',
          name: 'demo-plugin-vue-splitpane-demo',
          component: resolve => { require(['@/pages/demo/plugins/vue-splitpane/demo.vue'], resolve) }
        }
      ]
    },
    // papaParse
    {
      title: '表格解析',
      icon: 'cube',
      children: [
        {
          title: 'README',
          icon: 'document-text',
          path: 'papaParse/readme',
          name: 'demo-plugin-papaParse-readme',
          component: resolve => { require(['@/pages/demo/plugins/papaParse/readme.vue'], resolve) }
        },
        {
          title: '基本示例',
          icon: 'document',
          path: 'papaParse/demo',
          name: 'demo-plugin-papaParse-demo',
          component: resolve => { require(['@/pages/demo/plugins/papaParse/demo.vue'], resolve) }
        }
      ]
    },
    // countup
    {
      title: '数字动画',
      icon: 'wand',
      children: [
        {
          title: 'README',
          icon: 'document-text',
          path: 'countup/readme',
          name: 'demo-plugin-countup-readme',
          component: resolve => { require(['@/pages/demo/plugins/countup/readme.vue'], resolve) }
        },
        {
          title: '基本示例',
          icon: 'document',
          path: 'countup/demo',
          name: 'demo-plugin-countup-demo',
          component: resolve => { require(['@/pages/demo/plugins/countup/demo.vue'], resolve) }
        }
      ]
    },
    // clipboard-polyfill
    {
      title: '剪贴板',
      icon: 'clipboard',
      children: [
        {
          title: 'README',
          icon: 'document-text',
          path: 'clipboard-polyfill/readme',
          name: 'demo-plugin-clipboard-polyfill-readme',
          component: resolve => { require(['@/pages/demo/plugins/clipboard-polyfill/readme.vue'], resolve) }
        },
        {
          title: '基本示例',
          icon: 'document',
          path: 'clipboard-polyfill/demo',
          name: 'demo-plugin-clipboard-polyfill-demo',
          component: resolve => { require(['@/pages/demo/plugins/clipboard-polyfill/demo.vue'], resolve) }
        }
      ]
    },
    // js-cookie
    {
      title: 'Cookie',
      icon: 'beaker',
      children: [
        {
          title: 'README',
          icon: 'document-text',
          path: 'js-cookie/readme',
          name: 'demo-plugin-js-cookie-readme',
          component: resolve => { require(['@/pages/demo/plugins/js-cookie/readme.vue'], resolve) }
        },
        {
          title: '基本示例',
          icon: 'document',
          path: 'js-cookie/demo',
          name: 'demo-plugin-js-cookie-demo',
          component: resolve => { require(['@/pages/demo/plugins/js-cookie/demo.vue'], resolve) }
        }
      ]
    },
    // highlight
    {
      title: '代码高亮',
      icon: 'code',
      children: [
        {
          title: 'README',
          icon: 'document-text',
          path: 'highlight/readme',
          name: 'demo-plugin-highlight-readme',
          component: resolve => { require(['@/pages/demo/plugins/highlight/readme.vue'], resolve) }
        },
        {
          title: '基本示例',
          icon: 'document',
          path: 'highlight/demo',
          name: 'demo-plugin-highlight-demo',
          component: resolve => { require(['@/pages/demo/plugins/highlight/demo.vue'], resolve) }
        }
      ]
    },
    // mock
    {
      title: '模拟数据',
      icon: 'briefcase',
      children: [
        {
          title: 'README',
          icon: 'document-text',
          path: 'mock/readme',
          name: 'demo-plugin-mock-readme',
          component: resolve => { require(['@/pages/demo/plugins/mock/readme.vue'], resolve) }
        },
        {
          title: '语法规范',
          icon: 'document-text',
          path: 'mock/grammaticalNorm',
          name: 'demo-plugin-mock-grammaticalNorm',
          component: resolve => { require(['@/pages/demo/plugins/mock/grammaticalNorm.vue'], resolve) }
        },
        {
          title: '数据模板示例',
          icon: 'document',
          path: 'mock/demoDTD',
          name: 'demo-plugin-mock-demoDTD',
          component: resolve => { require(['@/pages/demo/plugins/mock/demoDTD.vue'], resolve) }
        },
        {
          title: '数据占位符示例',
          icon: 'document',
          path: 'mock/demoDPD',
          name: 'demo-plugin-mock-demoDPD',
          component: resolve => { require(['@/pages/demo/plugins/mock/demoDPD.vue'], resolve) }
        }
      ]
    }
  ]
}

// [插件] 路由设置
export const pluginRouter = {
  ...pluginMenu,
  children: [].concat(...pluginMenu.children.map(e => e.children))
}
