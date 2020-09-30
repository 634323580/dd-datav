<template>
<svg width="0" height="0" viewBox="0 0 100 100">
  <defs>
    <symbol id="more" viewBox="0 0 100 100">
      <circle cx="20" cy="25" r="5" fill="currentColor" />
      <circle cx="20" cy="50" r="5" fill="currentColor" />
      <circle cx="20" cy="75" r="5" fill="currentColor" />
      <line x1="40" y1="25" x2="90" y2="25" stroke="currentColor" stroke-width="4" />
      <line x1="40" y1="50" x2="90" y2="50" stroke="currentColor" stroke-width="4" />
      <line x1="40" y1="75" x2="90" y2="75" stroke="currentColor" stroke-width="4" />
    </symbol>
    <symbol id="filledArrowRight" viewBox="0 0 100 100">
      <polyline points="20 10, 80 50, 20 90" fill="currentColor"></polyline>
    </symbol>
    <symbol id="arrowRight" viewBox="0 0 100 100">
      <polyline points="20 10, 80 50, 20 90, 20 10" fill="transparent" stroke="currentColor" stroke-width="1"></polyline>
    </symbol>
  </defs>
</svg>
</template>

<script>
import { computed, ref, onMounted } from 'vue'
export default {
  name: 'TestComponent',
};
</script>
