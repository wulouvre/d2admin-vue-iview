<template>
  <div>
    <div class="logo">
      DASHBOARD
    </div>
    <Menu theme="dark" width="auto" :accordion="true">
      <Submenu
        v-for="(menu, index) in sideMenu"
        :key="index"
        :name="`${menu.title}${index}`">
        <template slot="title">
          <Icon v-if="menu.icon" :type="menu.icon"></Icon>
          {{menu.title}}
        </template>
        <MenuItem
          v-for="(menuItem, menuItemIndex) in menu.children"
          :key="menuItemIndex"
          :name="`${menuItem.name}${menuItemIndex}`"
          @click.native="$router.push({name: menuItem.name})">
          <Icon v-if="menuItem.icon" :type="menuItem.icon"></Icon>
          {{menuItem.title}}
        </MenuItem>
      </Submenu>
    </Menu>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { menu, router } from '@/router/menu/index.js'
export default {
  data () {
    return {
      menu,
      router
    }
  },
  computed: {
    ...mapState({
      sideMenu: state => state.menu.sideMenu
    })
  }
}
</script>
