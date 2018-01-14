<template>
  <Card class="mb">
    <div slot="title">
      <Button type="text" size="small">{{title}}</Button>
    </div>
    <div slot="extra">
      <Tooltip content="重新 mock 数据" placement="top-end">
        <Button type="primary" size="small" @click="$emit('reload')">
          <Icon type="loop"></Icon>
          刷新
        </Button>
      </Tooltip>
    </div>
    <Row :gutter="10">
      <Col span="12">
        <Alert class="mb-0">
          <Highlight :code="code"></Highlight>
        </Alert>
      </Col>
      <Col span="12">
        <Alert type="success" class="mb-0">
          <Highlight :code="mock"></Highlight>
        </Alert>
        
      </Col>
    </Row>
  </Card>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: false,
      default: 'Mock Demo'
    },
    code: {
      type: String,
      required: false,
      default: ''
    },
    mock: {
      type: String,
      required: false,
      default: ''
    }
  }
}
</script>

