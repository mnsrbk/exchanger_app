<template>
  <div>
    <div>
      <input class="search-input" type="text" placeholder="Search by name or code of currency" v-model="query">
      <app-button v-if="query.length" @click="clearSearch">Clear</app-button>
    </div>
    <div v-if="currencyStore.valutes()" class="valutes-list">
      <ValuteCard v-for="code in Object.keys(currencyStore.valutes(query))" :key="code" :code="code" :valute="currencyStore.valutes(query)[code]" />
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useCurrencyStore } from '../stores/CurrencyStore'
import ValuteCard from "../components/Base/ValuteCard.vue";
export default {
  components: { ValuteCard },
  setup () {
    const currencyStore = useCurrencyStore()
    const query = ref('')
    function clearSearch () { query.value = '' }
    return {
      currencyStore, query, clearSearch
    }
  }
}
</script>

<style scoped>
.valutes-list {
  margin: 0 5px;
  height: calc(100vh - 225px);
  overflow-y: overlay;
}

.valutes-list::-webkit-scrollbar {
  width: 0.5em;
}
 
.valutes-list::-webkit-scrollbar-track {
  /* box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3); */
  background-color: #f0f0f0;
}
 
.valutes-list::-webkit-scrollbar-thumb {
  background-color: #cdcdcd;
}
.search-input {
  display: inline-block;
  padding: 9px 10px;
  margin: 15px;
  width: 50%;
  min-width: 200px;
  border: 1px solid transparent;
  background-color: #f5f5f5;
}
.search-input:focus {
  background-color: #efefef;
  outline: 0;
  /* border: 1px solid blue; */
}

@media (prefers-color-scheme: dark) {
  .valutes-list::-webkit-scrollbar {
    width: 0.5em;
  }
  
  .valutes-list::-webkit-scrollbar-track {
    /* box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3); */
    background-color: #252525;
  }
  
  .valutes-list::-webkit-scrollbar-thumb {
    background-color: #555555;
  }

  .search-input {
    background-color: #252525;
    color: white;
  }
  .search-input:focus {
    background-color: #454545;
    outline: 0;
    /* border: 1px solid blue; */
  }
}
</style>