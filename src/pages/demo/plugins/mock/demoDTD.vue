<template>
  <Container type="ghost">
    <Card class="mb">
      <Markdown url="/static/markdownFiles/article/mock演示页面介绍.md"></Markdown>
    </Card>
    <MockDemoCard
      v-for="(item, index) in settingDTD"
      :key="index"
      :title="item.title"
      :code="JSON.stringify(item.json, null, 2)"
      :mock="mockResult[index]"
      @reload="doMock(index)">
    </MockDemoCard>
    <MockDemoCard
      :title="fn.title"
      :code="fn.code"
      :mock="fn.mocked"
      @reload="fnMock()">
    </MockDemoCard>
    <MockDemoCard
      :title="regexp.title"
      :code="regexp.code"
      :mock="regexp.mocked"
      @reload="regexpMock()">
    </MockDemoCard>
  </Container>
</template>

<script>
import Vue from 'vue'
import * as tool from '@/assets/library/tool/tool.js'
import Mock from 'mockjs'
import settingDTD from './data/settingDTD'
import MockDemoCard from './componnets/MockDemoCard'
// mixin
import regexp from './mixins/regexp'
import fn from './mixins/function'
export default {
  mixins: [
    regexp,
    fn
  ],
  components: {
    MockDemoCard
  },
  data () {
    return {
      mockResult: [],
      settingDTD,
      settingDTDClone: tool.clone(settingDTD)
    }
  },
  mounted () {
    this.settingDTD.forEach((e, i) => {
      this.doMock(i)
    })
    this.fnMock()
    this.regexpMock()
  },
  methods: {
    doMock (n = 0) {
      Vue.set(this.mockResult, n, JSON.stringify(Mock.mock(this.settingDTDClone[n].json), null, 2))
    }
  }
}
</script>
