<template>
  <button class="app-button" :class="isActive ? 'active' : ''" @click="emit('click')">
    <slot></slot>
  </button>
</template>

<script setup>
const props = defineProps({ isActive: Boolean})
const emit = defineEmits(['click'])
</script>

<style scoped>
.app-button {
  padding: 10px 15px;
  font-weight: 600;
  border: 0px;
  outline: 0px;
  background-color: #d5d5d5;
}
.app-button:hover {
  cursor: pointer;
}
.active {
  background-color: white;
  /* color: white; */
}

@media (prefers-color-scheme: dark) {
  .app-button {
    background-color: #252525;
    color: white;
  }
  .active {
    background-color: #303030;
  }
}
</style>