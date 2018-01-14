<template>
  <Container>
    <p slot="title">演示</p>
    <p slot="more"><GithubLink url="https://github.com/mholt/PapaParse"></GithubLink></p>
    <Upload
      :before-upload="handleUpload"
      action="default">
      <Button>选择一个CSV文件</Button>
    </Upload>
    <Table v-bind="table"></Table>
  </Container>
</template>

<script>
import papa from 'papaparse'
export default {
  data () {
    return {
      table: {
        columns: [],
        data: [],
        size: 'small',
        stripe: true,
        border: true
      }
    }
  },
  methods: {
    handleUpload (file) {
      papa.parse(file, {
        header: true,
        skipEmptyLines: true,
        complete: (results, file) => {
          this.table.columns = Object.keys(results.data[0]).map(e => ({
            title: e,
            key: e
          }))
          this.table.data = results.data
        }
      })
      return false
    }
  }
}
</script>

