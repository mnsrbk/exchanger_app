import { defineStore } from "pinia";
export const useCurrencyStore = defineStore('currencyStore', {
  state: () => ({
    currencies: {}  
  }),
  getters: {
    // filtered values get with query
    valutes: (state) => {
      return (q = '') => {
        if (q === '') { return state.currencies['Valute'] }
        else {
          const result = {}
          for (const [key, val] of Object.entries(state.currencies['Valute'])) {
            if (key.toLowerCase().includes(q.toLowerCase()) || val['Name'].toLowerCase().includes(q.toLowerCase())) {
              result[key] = val
            }
          }
          return result
        }
      }
    },
    // converter calculation
    calc: (state) => {
      return (base, target, amount) => {
        const valutes = state.currencies['Valute']
        return ((valutes[base]['Value'] * amount / valutes[base]['Nominal'])/valutes[target]['Value']*valutes[target]['Nominal']).toFixed(4)
      } 
    }
  },
  actions: {
    // initializing currencies
    setCurrencies (val) {
      this.currencies = val
    }
  }

})