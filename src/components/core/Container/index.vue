<template>
  <div class="container-component">
    <!-- [card] 卡片容器 -->
    <Card v-if="type === 'card'" class="card">
      <div v-if="$slots.title" slot="title">
        <slot name="title"></slot>
      </div>
      <div v-if="$slots.more" slot="extra">
        <slot name="more"></slot>
      </div>
      <slot></slot>
    </Card>
    <!-- [ghost] 隐形的容器 -->
    <div v-if="type === 'ghost'" class="ghost">
      <slot></slot>
    </div>
    <!-- [ghost-full] absolute定位 上下左右都贴边 -->
    <div v-if="type === 'ghost-full'" class="ghost-full">
      <slot></slot>
    </div>
    <!-- [ghost-full-card] absolute定位 上下左右有边距 卡片样式 -->
    <div v-if="type === 'ghost-full-card'" class="ghost-full-card">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      required: false,
      default: 'card'
    }
  }
}
</script>

<style lang="scss">
@import '~@/assets/style/public.scss';
.container-component {
  .card {
    margin: 0px $margin $margin $margin;
  }
  .ghost {
    margin: 0px $margin;
  }
  .ghost-full {
    position: absolute;
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
  }
  .ghost-full-card {
    @extend %card;
    position: absolute;
    top: 0px;
    bottom: $margin;
    left: $margin;
    right: $margin;
  }
}
</style>
