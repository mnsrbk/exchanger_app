<template>
  <div class="home-page">
    <div class="tabs-buttons">
      <app-button :isActive="isActive('all_currencies')" @click="current = 'all_currencies'">All currencies</app-button>
      <app-button :isActive="isActive('converter')" @click="current = 'converter'">Converter</app-button>
    </div>
    <div class="content-wrapper">
      <KeepAlive>
        <Component :is="current === 'all_currencies' ? 'CurrenciesTab' : 'ConverterTab'" />
      </KeepAlive>
    </div>
  </div>
</template>

<script>
import { computed, ref } from 'vue'
import { useCurrencyStore } from '../stores/CurrencyStore'
import CurrenciesTab from '../components/CurrenciesTab.vue'
import ConverterTab from '../components/ConverterTab.vue'
export default {
  components: {
    CurrenciesTab,
    ConverterTab
  },
  setup () {
    const currencyStore = useCurrencyStore()
    const current = ref('all_currencies')
    async function fetchData () {
      const res = await fetch('https://www.cbr-xml-daily.ru/daily_json.js')
      const data = await res.json()
      currencyStore.setCurrencies(data)
    }
    const isActive = computed(() => (view) => current.value === view)
    return {
      currencyStore,
      current,
      isActive,
      fetchData
    }
  },
  async beforeMount () { await this.fetchData() }
}
</script>

<style scoped>
.content-wrapper {
  /* border: 2px solid blue; */
  background-color: white;
  height: calc(100vh - 150px);
  overflow-y: hidden;
}
@media (prefers-color-scheme: dark) {
  .content-wrapper {
    background-color: #303030;
  }
}
</style>