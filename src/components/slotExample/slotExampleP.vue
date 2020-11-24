<template>
  <slot-example>
    <template v-slot:pre="{value}">
      <span>前置{{ value }}</span>
    </template>
    <template v-slot:next>
      <span>后置</span>
    </template>
  </slot-example>
</template>

<script>
  import slotExample from "./slotExample";

  export default {
    name: "slotExampleP",
    components: {slotExample}
  }
</script>

<style scoped>

</style>
