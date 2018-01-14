<template>
  <Layout class="main-layout">
    <Sider class="main-layout-sider">
      <SiderMenu></SiderMenu>
    </Sider>
    <Header class="main-layout-header">
      <HeaderMenu></HeaderMenu>
    </Header>
    <BreadcrumbBar></BreadcrumbBar>
    <Layout class="main-layout-content">
      <router-view></router-view>
    </Layout>
  </Layout>
</template>

<script>
import SiderMenu from '@/components/core/MainLayout/_siderMenu.vue'
import HeaderMenu from '@/components/core/MainLayout/_headerMenu.vue'
import BreadcrumbBar from '@/components/core/MainLayout/_breadcrumbBar.vue'
export default {
  components: {
    SiderMenu,
    HeaderMenu,
    BreadcrumbBar
  }
}
</script>

<style lang="scss">
@import '~@/assets/style/theme/default.scss';
</style>

