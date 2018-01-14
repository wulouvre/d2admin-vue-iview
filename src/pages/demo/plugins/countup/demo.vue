<template>
  <Container type="ghost" class="demo-plugin-countup-demo">
    <Row :gutter="10">
      <Col span="6">
        <Card>
          <p slot="title">只设置目标数字</p>
          <CountUp :end="100"></CountUp>
        </Card>
      </Col>
      <Col span="6">
        <Card>
          <p slot="title">设置起止数值</p>
          <CountUp :start="14" :end="100"></CountUp>
        </Card>
      </Col>
      <Col span="6">
        <Card>
          <p slot="title">小数位数</p>
          <CountUp :end="100.00" :decimals="2"></CountUp>
        </Card>
      </Col>
      <Col span="6">
        <Card>
          <p slot="title">动画时长</p>
          <CountUp :end="100" :duration="6"></CountUp>
        </Card>
      </Col>
      <Col span="6">
        <Card>
          <p slot="title">回调函数</p>
          <CountUp :end="100" :callback="() => {className = 'end'}" :class="className"></CountUp>
        </Card>
      </Col>
      <Col span="6">
        <Card>
          <p slot="title">结束一秒后更新数值</p>
          <CountUp :end="end" :callback="update"></CountUp>
        </Card>
      </Col>
    </Row>
  </Container>
</template>

<script>
export default {
  data () {
    return {
      // 回调函数使用
      className: '',
      // 更新数值用
      end: 50
    }
  },
  methods: {
    update () {
      setTimeout(() => {
        this.end = 100
      }, 1000)
    }
  }
}
</script>


<style lang="scss">
@import '~@/assets/style/public.scss';
.demo-plugin-countup-demo {
  .ivu-card {
    @extend %unable-select;
    margin-bottom: 10px;
    .ivu-card-body {
      display: flex;
      justify-content: center;
      align-items: center;
      span {
        font-size: 40px;
        &.end {
          padding: 0px 20px;
          border-radius: 4px;
          background-color: $color-success;
          color: #FFF;
        }
      }
    }
  }
}
</style>
