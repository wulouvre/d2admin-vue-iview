<template>
  <Container type="ghost">
    <Row :gutter="10">
      <Col span="12">
        <Card>
          <p slot="title">markdown 源码</p>
          <pre>{{mdSource}}</pre>
        </Card>
      </Col>
      <Col span="12">
        <Card>
          <p slot="title">markdown 解析结果 代码高亮显示</p>
          <div class="markdown-body" v-html="markedHTML"></div>
        </Card>
      </Col>
    </Row>
  </Container>
</template>

<script>
import marked from 'marked'
import highlight from 'highlight.js'
export default {
  data () {
    return {
      mdSource: '',
      markedHTML: ''
    }
  },
  async mounted () {
    this.mdSource = await this.getReadme(this.url)
    this.markedHTML = marked(this.mdSource, {
      highlight: (code) => {
        return highlight.highlightAuto(code).value
      }
    })
  },
  methods: {
    async getReadme () {
      const { data } = await this.$axios.get('/static/markdownFiles/demo/baseMarkdowmFile.md')
      return data
    }
  }
}
</script>