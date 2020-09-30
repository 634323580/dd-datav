<template>
<div class="test">
  <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="200px" height="200px" viewBox="0 0 100 100">
    <line x1="50" y1="0"
      x2="50" y2="100"
      stroke="red"
      stroke-width="5"/>
    <line x1="0" y1="50"
      x2="100" y2="50"
      stroke="red"
      stroke-width="5"/>
  </svg>
</div>
</template>

<script>
import { computed, ref, onMounted } from 'vue'
export default {
  name: 'TestComponent',
  setup() {
    const message = 'Test1666'
    return {
      message,
    }
  }
};
</script>

<style lang="scss" scoped>
.test{
  color: red;
}
</style>
