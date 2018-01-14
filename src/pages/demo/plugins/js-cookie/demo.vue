<template>
  <Container type="ghost">
    <Card class="mb">
      <p slot="title">基本读写删</p>
      <Button type="primary" @click="set('test-user-name', 'test-user')"><Icon type="log-in"></Icon> set('test-user-name', 'normalValue')</Button>
      <Button type="info" @click="get('test-user-name')"><Icon type="log-out"></Icon> get('test-user-name')</Button>
      <Button type="error" @click="remove('test-user-name')"><Icon type="trash-b"></Icon> remove('test-user-name')</Button>
    </Card>
    <Card class="mb">
      <p slot="title">设置有效期</p>
      <Button type="primary" @click="setExpires('test-user-pwd', '123456789', 1)"><Icon type="log-in"></Icon> 设置 'test-user-pwd' 有效期为一天</Button>
      <Button type="info" @click="get('test-user-pwd')"><Icon type="log-out"></Icon> get('test-user-pwd')</Button>
      <Button type="error" @click="remove('test-user-pwd')"><Icon type="trash-b"></Icon> remove('test-user-pwd')</Button>
    </Card>
    <Card class="mb">
      <p slot="title">获取所有可以获得的数据</p>
      <Button type="info" @click="getAll"><Icon type="log-out"></Icon> getAll</Button>
    </Card>
  </Container>
</template>

<script>
import Cookies from 'js-cookie'
export default {
  methods: {
    set (name = 'default-name', value = 'default-value') {
      Cookies.set(name, value)
      this.$Message.info(`设置数据 ${name} = ${value}`)
    },
    setExpires (name = 'default-name', value = 'default-value', expires = 1) {
      Cookies.set(name, value, {
        expires
      })
      this.$Message.info(`设置数据 ${name} = ${value} 有效期 ${expires} 天`)
    },
    get (name = 'default-name') {
      const value = Cookies.get(name)
      this.$Message.info(`获取数据 ${name} = ${value}`)
    },
    getAll () {
      const value = Cookies.get()
      console.log(value)
      this.$Message.info('结果已经打印到控制台')
    },
    remove (name = 'default-name') {
      Cookies.remove(name)
      this.$Message.info(`删除数据 ${name}`)
    }
  }
}
</script>

