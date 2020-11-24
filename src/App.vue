<template>
  <div id="app">
    <router-link to="/slotExample">slot示例</router-link>
<!--    <slot-example>-->
<!--      <template v-slot:pre="{value}">-->
<!--        <span>前置{{ value }}</span>-->
<!--      </template>-->
<!--      <template v-slot:next>-->
<!--        <span>后置</span>-->
<!--      </template>-->
<!--    </slot-example>-->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
  }
}
</script>

<style lang="scss">

</style>
