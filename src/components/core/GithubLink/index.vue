<template>
  <Tooltip :content="url" :placement="tooltipPlacement">
    <a :href="url" target="_blank">
      View in Github
      <Icon type="social-github"></Icon>
    </a>  
  </Tooltip>
</template>

<script>
export default {
  props: {
    url: {
      default: 'https://github.com/FairyEver'
    },
    tooltipPlacement: {
      default: 'bottom-end'
    }
  }
}
</script>

