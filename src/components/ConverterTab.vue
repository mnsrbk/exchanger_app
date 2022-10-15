<template>
  <div class="converter-wrapper">
    <input type="text" v-model="amount">
    <select name="Currency" id="" v-model="base">
      <option value="" disabled selected>Select base currency</option>
      <option v-for="currency in Object.keys(currencyStore.valutes())" :key="currency" :value="currency">
        <span>{{ currency }} ({{currencyStore.valutes()[currency]['Name']}})</span>
      </option>
    </select>
    <app-button @click="replace"><IconArrowLeftRight /></app-button>
    <input type="text" disabled v-model="calculation">
    <select name="Currency" id="" v-model="target">
      <option value="" disabled selected>Select target currency</option>
      <option v-for="currency in Object.keys(currencyStore.valutes())" :key="currency" :value="currency">
        <span>{{ currency }} ({{currencyStore.valutes()[currency]['Name']}})</span>
      </option>
    </select>
  </div>
</template>

<script>
import { computed, ref } from 'vue'
import { useCurrencyStore } from '../stores/CurrencyStore'
import IconArrowLeftRight from '../components/icons/IconArrowLeftRight.vue';
export default {
  components: {
    IconArrowLeftRight
  },
  setup () {
    const currencyStore = useCurrencyStore()
    const base = ref('')
    const target = ref('')
    const amount = ref(0)
    function replace () {
      [base.value, target.value] = [target.value, base.value]
    }
    const calculation = computed(() => {
      if (amount.value && base.value && target.value) {
        return currencyStore.calc(base.value, target.value, amount.value)
      } else {
        return 0
      }
    })
    return {
      currencyStore, base, target, amount, replace, calculation
    }
  }
}
</script>

<style scoped>
.converter-wrapper {
  /* border: 1px solid; */
  padding: 30px;
  display: flex;
  flex-direction: row;
}
input {
  flex-grow: 1;
  text-align: right;
  display: inline-block;
  padding: 10px 10px;
  min-width: 200px;
  border: 2px solid transparent;
  background-color: #f5f5f5;
}
select {
  flex-grow: 1;
  display: inline-block;
  padding: 10px 10px;
  min-width: 200px;
  border: 1px solid transparent;
  border-style: solid;
  border-left-color: #d5d5d5;
  background-color: #f5f5f5;
}
span {
  font-weight: 600;
}
</style>