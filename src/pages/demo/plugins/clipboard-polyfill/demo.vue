<template>
  <Container>
    <p slot="title">演示</p>
    <p slot="more"><GithubLink url="https://github.com/lgarron/clipboard-polyfill"></GithubLink></p>
    <Row :gutter="10">
      <Col span="12">
        <div class="mb">
          <Input v-model="text" style="width: 200px;"></Input>
          <Button @click="copyText()">将左侧输入框内的文字复制进剪贴板</Button>
        </div>
        <Button @click="copyHtml()">将 <span v-html="html"></span> 连带样式一起复制进剪贴板，然后去 Word 文档内粘贴</Button>
      </Col>
      <Col span="12">
        <Alert>
          <p>reading currently only works in Internet Explorer</p>
          <p>只有在 IE 浏览器下你才可以通过下面这两个按钮获取剪贴板数据</p>
        </Alert>
        <div class="mb">
          <Tooltip content="需要 IE 浏览器" placement="top">
            <Button @click="readText">readText( )</Button>
          </Tooltip>
          <Tooltip content="需要 IE 浏览器" placement="top">
            <Button @click="read">read( )</Button>
          </Tooltip>
        </div>
        <Input type="textarea" placeholder="在这里检验你的剪贴板 ( text/plain 数据 )"></Input>
      </Col>
    </Row>
  </Container>
</template>

<script>
import clipboard from 'clipboard-polyfill'
export default {
  data () {
    return {
      text: 'Hello ~',
      html: '<span style="background-color: #19be6b; color: #f8f8f9;">Hello</span><span style="background-color: #495060; color: #f8f8f9;">World</span>'
    }
  },
  methods: {
    copyText () {
      clipboard.writeText(this.text)
    },
    copyHtml () {
      var dt = new clipboard.DT()
      dt.setData('text/html', this.html)
      clipboard.write(dt)
    },
    readText () {
      clipboard.readText().then((res) => {
        console.log(res)
        this.$Message.success('读取成功 返回结果请查看控制台')
      }, (err) => {
        console.log(err)
        this.$Message.error('错误信息已经打印到控制台')
      })
    },
    read () {
      clipboard.read().then((res) => {
        console.log(res)
        this.$Message.success('读取成功 返回结果请查看控制台')
      }, (err) => {
        console.log(err)
        this.$Message.error('错误信息已经打印到控制台')
      })
    }
  }
}
</script>