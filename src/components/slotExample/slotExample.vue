<template>
  <div class="slot-example">
    <slot name="pre" :value="value"></slot>
    12
    <slot name="next"></slot>
  </div>
</template>

<script>
    export default {
        name: "slotExample",
        data() {
            return {
                value: Math.random()
            }
        }
    }
</script>

<style scoped>

</style>
