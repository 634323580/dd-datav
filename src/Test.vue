<template>
<div class="test">
  <div>{{message}}</div>
  <div>{{doubleCount}}</div>
  <button @click="add">add</button>
</div>
</template>

<script>
import { computed, ref, onMounted } from 'vue'
export default {
  name: 'TestComponent',
  setup() {
    const message = 'hello vue3!!'
    const count = ref(1)
    const doubleCount = computed(() => count.value * 2)
    const add = () => {count.value++}
    onMounted(() => {
      console.log('onMounted')
    })
    return {
      message,
      doubleCount,
      add
    }
  }
};
</script>

<style lang="scss" scoped>
.test {
  color: red
}
</style>
