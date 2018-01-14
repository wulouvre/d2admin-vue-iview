<template>
  <Container type="ghost">
    <Card class="mb">
      <p slot="title">javascript</p>
      <Highlight :code="codeJavascript"></Highlight>
    </Card>
    <Row :gutter="10">
      <Col span="8">
        <Card class="mb">
          <p slot="title">css</p>
          <Highlight :code="codeCSS"></Highlight>
        </Card>
      </Col>
      <Col span="8">
        <Card class="mb">
          <p slot="title">scss</p>
          <Highlight :code="codeSCSS"></Highlight>
        </Card>
      </Col>
      <Col span="8">
        <Card class="mb">
          <p slot="title">html</p>
          <Highlight :code="codeHTML"></Highlight>
        </Card>
      </Col>
    </Row>
  </Container>
</template>

<script>
import codeJavascript from './code/javascript'
import codeCSS from './code/css'
import codeSCSS from './code/scss'
import codeHTML from './code/html'
export default {
  data () {
    return {
      codeJavascript,
      codeCSS,
      codeSCSS,
      codeHTML
    }
  }
}
</script>
