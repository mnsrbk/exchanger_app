<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="container">
    <header>
      <h1>Exchanger app</h1>
    </header>
    <RouterView />
  </div>
</template>

<style scoped>
h1 {
  font-weight: 600;
  /* border: 1px solid; */
  padding-top: 5px;
  padding-bottom: 15px;
}
.container {
  margin: 0px 100px;
}
@media screen and (max-width: 1072px) {
  .container {
    margin: 0px 30px;
  }
}
@media screen and (max-width: 700px) {
  .container {
    margin: 0px 10px;
  }
}
</style>
