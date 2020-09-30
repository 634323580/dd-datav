<template>
<div class="test">
  {{message}}
</div>
</template>

<script>
import { computed, ref, onMounted } from 'vue'
export default {
  name: 'Test2Component',
  setup() {
    const message = 'Test2'
    return {
      message,
    }
  }
};
</script>

<style lang="scss" scoped>
.test {
  color: red
}
</style>
